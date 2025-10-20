'use client';

import { useState } from 'react';
import { ExcelUpload } from './ExcelUpload';
import { useExcelUpload } from '../hooks/useExcelUpload';
import { ExcelUploadResult, ExcelValidationRule } from '../types/excel';

function ExcelUploadModal({
  isOpen,
  onClose,
  onUploadSuccess,
  title = 'Upload Excel File',
  description = 'Select an Excel file to upload and process data.',
  validationRules = [],
  className = '',
}: {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (result: ExcelUploadResult) => void;
  title?: string;
  description?: string;
  validationRules?: ExcelValidationRule[];
  className?: string;
}) {
  const [showPreview, setShowPreview] = useState(false);

  const { isUploading, uploadedData, error, uploadFile, clearData, convertToLocationData } =
    useExcelUpload({
      validationRules,
      onSuccess: (result) => {
        setShowPreview(true);
        onUploadSuccess(result);
      },
      onError: (error) => {
        console.error('Upload error:', error);
      },
    });

  const handleClose = () => {
    clearData();
    setShowPreview(false);
    onClose();
  };

  const handleConfirm = () => {
    if (uploadedData) {
      onUploadSuccess({
        success: true,
        data: uploadedData,
        totalRows: uploadedData.reduce((sum, sheet) => sum + sheet.data.length, 0),
      });
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={handleClose}
        />

        {/* Modal */}
        <div
          className={`relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {!showPreview ? (
              <div className="space-y-4">
                <ExcelUpload
                  onUploadSuccess={(result) => {
                    setShowPreview(true);
                    onUploadSuccess(result);
                  }}
                  onUploadError={(error) => {
                    console.error('Upload error:', error);
                  }}
                  validationRules={validationRules}
                  disabled={isUploading}
                />

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Upload Error</h3>
                        <div className="mt-2 text-sm text-red-700 whitespace-pre-line">{error}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Upload Successful</h3>
                      <div className="mt-2 text-sm text-green-700">
                        File processed successfully. Review the data below before confirming.
                      </div>
                    </div>
                  </div>
                </div>

                {uploadedData && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Data Preview</h4>
                    {uploadedData.map((sheet, sheetIndex) => (
                      <div
                        key={sheetIndex}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                          <h5 className="font-medium text-gray-900">
                            Sheet: {sheet.sheetName} ({sheet.data.length} rows)
                          </h5>
                        </div>
                        <div className="overflow-x-auto max-h-60">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                {sheet.headers.map((header, index) => (
                                  <th
                                    key={index}
                                    className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {sheet.data.slice(0, 5).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {sheet.headers.map((header, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2 text-sm text-gray-900">
                                      {row[header] || '-'}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {sheet.data.length > 5 && (
                            <div className="px-4 py-2 text-sm text-gray-500 bg-gray-50">
                              ... and {sheet.data.length - 5} more rows
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end space-x-3 px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            {showPreview && (
              <button
                onClick={handleConfirm}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Confirm Upload
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ExcelUploadModal };
