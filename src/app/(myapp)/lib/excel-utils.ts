import * as XLSX from 'xlsx';
import { ExcelData, ExcelRow, ExcelUploadResult, ExcelValidationRule, ExcelValidationResult } from '../types/excel';

/**
 * Parse an Excel file and return structured data
 */
export function parseExcelFile(file: File): Promise<ExcelUploadResult> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        if (!data) {
          resolve({
            success: false,
            error: 'Failed to read file',
          });
          return;
        }

        const workbook = XLSX.read(data, { type: 'binary' });
        const result: ExcelData[] = [];
        let totalRows = 0;

        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          
          if (jsonData.length === 0) return;

          // First row as headers
          const headers = jsonData[0] as string[];
          const rows = jsonData.slice(1) as any[][];

          // Convert rows to objects
          const dataRows: ExcelRow[] = rows.map((row) => {
            const rowObj: ExcelRow = {};
            headers.forEach((header, index) => {
              rowObj[header] = row[index] || null;
            });
            return rowObj;
          });

          result.push({
            sheetName,
            data: dataRows,
            headers,
          });

          totalRows += dataRows.length;
        });

        resolve({
          success: true,
          data: result,
          fileName: file.name,
          totalRows,
        });
      } catch (error) {
        resolve({
          success: false,
          error: `Error parsing Excel file: ${error instanceof Error ? error.message : 'Unknown error'}`,
        });
      }
    };

    reader.onerror = () => {
      resolve({
        success: false,
        error: 'Failed to read file',
      });
    };

    reader.readAsBinaryString(file);
  });
}

/**
 * Validate Excel data against provided rules
 */
export function validateExcelData(
  data: ExcelData[],
  rules: ExcelValidationRule[]
): ExcelValidationResult {
  const errors: Array<{ row: number; field: string; message: string }> = [];
  let isValid = true;

  data.forEach((sheet) => {
    sheet.data.forEach((row, rowIndex) => {
      rules.forEach((rule) => {
        const value = row[rule.field];
        const actualRow = rowIndex + 2; // +2 because we skip header row and arrays are 0-indexed

        // Check required fields
        if (rule.required && (value === null || value === undefined || value === '')) {
          errors.push({
            row: actualRow,
            field: rule.field,
            message: `${rule.field} is required`,
          });
          isValid = false;
          return;
        }

        if (value === null || value === undefined || value === '') return;

        // Check type validation
        if (rule.type === 'number' && isNaN(Number(value))) {
          errors.push({
            row: actualRow,
            field: rule.field,
            message: `${rule.field} must be a number`,
          });
          isValid = false;
        }

        if (rule.type === 'email' && !isValidEmail(String(value))) {
          errors.push({
            row: actualRow,
            field: rule.field,
            message: `${rule.field} must be a valid email`,
          });
          isValid = false;
        }

        if (rule.type === 'date' && !isValidDate(String(value))) {
          errors.push({
            row: actualRow,
            field: rule.field,
            message: `${rule.field} must be a valid date`,
          });
          isValid = false;
        }

        // Check length validation
        const stringValue = String(value);
        if (rule.minLength && stringValue.length < rule.minLength) {
          errors.push({
            row: actualRow,
            field: rule.field,
            message: `${rule.field} must be at least ${rule.minLength} characters`,
          });
          isValid = false;
        }

        if (rule.maxLength && stringValue.length > rule.maxLength) {
          errors.push({
            row: actualRow,
            field: rule.field,
            message: `${rule.field} must be at most ${rule.maxLength} characters`,
          });
          isValid = false;
        }

        // Check pattern validation
        if (rule.pattern && !rule.pattern.test(stringValue)) {
          errors.push({
            row: actualRow,
            field: rule.field,
            message: `${rule.field} format is invalid`,
          });
          isValid = false;
        }
      });
    });
  });

  return { isValid, errors };
}

/**
 * Convert Excel data to locations format
 */
export function convertToLocations(data: ExcelData[]): Array<{
  id: string | number;
  lat: number;
  lng: number;
  title?: string;
  description?: string;
  color?: string;
}> {
  const locations: Array<{
    id: string | number;
    lat: number;
    lng: number;
    title?: string;
    description?: string;
    color?: string;
  }> = [];

  data.forEach((sheet) => {
    sheet.data.forEach((row, index) => {
      const lat = parseFloat(String(row.lat || row.latitude || row.Latitude || ''));
      const lng = parseFloat(String(row.lng || row.longitude || row.Longitude || ''));

      if (!isNaN(lat) && !isNaN(lng)) {
        locations.push({
          id: row.id || row.ID || `${sheet.sheetName}_${index}`,
          lat,
          lng,
          title: String(row.title || row.name || row.Title || row.Name || ''),
          description: String(row.description || row.Description || ''),
          color: String(row.color || row.Color || 'blue'),
        });
      }
    });
  });

  return locations;
}

/**
 * Export data to Excel file
 */
export function exportToExcel(
  data: ExcelData[],
  fileName: string = 'export.xlsx'
): void {
  const workbook = XLSX.utils.book_new();

  data.forEach((sheet) => {
    const worksheet = XLSX.utils.json_to_sheet(sheet.data);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheet.sheetName);
  });

  XLSX.writeFile(workbook, fileName);
}

/**
 * Helper functions
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

/**
 * Get file size in human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Check if file is Excel format
 */
export function isExcelFile(file: File): boolean {
  const excelMimeTypes = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.oasis.opendocument.spreadsheet',
  ];
  
  const excelExtensions = ['.xls', '.xlsx', '.ods'];
  const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
  
  return excelMimeTypes.includes(file.type) || excelExtensions.includes(fileExtension);
}
