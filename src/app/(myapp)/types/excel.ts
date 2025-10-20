export interface ExcelRow {
  [key: string]: string | number | boolean | null;
}

export interface ExcelData {
  sheetName: string;
  data: ExcelRow[];
  headers: string[];
}

export interface ExcelUploadResult {
  success: boolean;
  data?: ExcelData[];
  error?: string;
  fileName?: string;
  totalRows?: number;
}

export interface ExcelValidationRule {
  field: string;
  required?: boolean;
  type?: 'string' | 'number' | 'date' | 'email';
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

export interface ExcelValidationResult {
  isValid: boolean;
  errors: Array<{
    row: number;
    field: string;
    message: string;
  }>;
}

// Common Excel column mappings for different data types
export const EXCEL_COLUMNS = {
  LOCATION: {
    ID: 'id',
    TITLE: 'title',
    DESCRIPTION: 'description',
    LATITUDE: 'lat',
    LONGITUDE: 'lng',
    COLOR: 'color',
    ADDRESS: 'address',
    CITY: 'city',
    COUNTRY: 'country',
  },
  PROJECT: {
    ID: 'id',
    NAME: 'name',
    DESCRIPTION: 'description',
    STATUS: 'status',
    START_DATE: 'startDate',
    END_DATE: 'endDate',
    BUDGET: 'budget',
    MANAGER: 'manager',
  },
} as const;
