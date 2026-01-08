import React from 'react';
interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
}
export function Table<T extends {
  id: string | number;
}>({
  data,
  columns,
  onRowClick,
  isLoading
}: TableProps<T>) {
  if (isLoading) {
    return <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-100 border-b border-gray-200" />
          {[...Array(5)].map((_, i) => <div key={i} className="h-16 border-b border-gray-100 bg-white" />)}
        </div>
      </div>;
  }
  return <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {columns.map((col, idx) => <th key={idx} className={`px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider ${col.className || ''}`}>
                  {col.header}
                </th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                  No data available
                </td>
              </tr> : data.map(item => <tr key={item.id} onClick={() => onRowClick && onRowClick(item)} className={`
                    group transition-colors
                    ${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
                  `}>
                  {columns.map((col, idx) => <td key={idx} className={`px-6 py-4 text-sm text-gray-700 ${col.className || ''}`}>
                      {typeof col.accessor === 'function' ? col.accessor(item) : item[col.accessor] as React.ReactNode}
                    </td>)}
                </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}