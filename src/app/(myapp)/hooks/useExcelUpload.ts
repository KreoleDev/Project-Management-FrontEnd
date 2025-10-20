import { useState, useCallback } from 'react';
import { parseExcelFile, validateExcelData, convertToLocations } from '../lib/excel-utils';
import { ExcelUploadResult, ExcelData, ExcelValidationRule } from '../types/excel';

interface UseExcelUploadOptions {
  validationRules?: ExcelValidationRule[];
  onSuccess?: (result: ExcelUploadResult) => void;
  onError?: (error: string) => void;
}

interface UseExcelUploadReturn {
  isUploading: boolean;
  uploadProgress: number;
  uploadedData: ExcelData[] | null;
  error: string | null;
  uploadFile: (file: File) => Promise<void>;
  clearData: () => void;
  convertToLocationData: () => Array<{
    id: string | number;
    lat: number;
    lng: number;
    title?: string;
    description?: string;
    color?: string;
  }>;
}

export function useExcelUpload({
  validationRules = [],
  onSuccess,
  onError,
}: UseExcelUploadOptions = {}): UseExcelUploadReturn {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedData, setUploadedData] = useState<ExcelData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = useCallback(async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 100);

      const result = await parseExcelFile(file);
      
      clearInterval(progressInterval);
      setUploadProgress(100);

      if (result.success && result.data) {
        // Validate data if rules are provided
        if (validationRules.length > 0) {
          const validation = validateExcelData(result.data, validationRules);
          if (!validation.isValid) {
            const errorMessage = `Validation failed:\n${validation.errors
              .map(err => `Row ${err.row}: ${err.field} - ${err.message}`)
              .join('\n')}`;
            setError(errorMessage);
            onError?.(errorMessage);
            return;
          }
        }

        setUploadedData(result.data);
        onSuccess?.(result);
      } else {
        const errorMessage = result.error || 'Upload failed';
        setError(errorMessage);
        onError?.(errorMessage);
      }
    } catch (err) {
      const errorMessage = `Upload failed: ${err instanceof Error ? err.message : 'Unknown error'}`;
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, [validationRules, onSuccess, onError]);

  const clearData = useCallback(() => {
    setUploadedData(null);
    setError(null);
    setUploadProgress(0);
  }, []);

  const convertToLocationData = useCallback(() => {
    if (!uploadedData) return [];
    return convertToLocations(uploadedData);
  }, [uploadedData]);

  return {
    isUploading,
    uploadProgress,
    uploadedData,
    error,
    uploadFile,
    clearData,
    convertToLocationData,
  };
}
