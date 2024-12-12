import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { JSX } from 'react';

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

/**
 * Component for "Table" Slices.
 */
const Table = ({ slice }: TableProps): JSX.Element => {
  const { table_column_headings: headings, table_rows: rows } = slice.primary;

  if (!headings || !headings[0] || !rows) {
    return <p>No table data available.</p>;
  }

  return (
    <div className='relative overflow-x-auto'>
      <table className='table-auto w-full text-left border-collapse border border-gray-300'>
        {/* Table Head */}
        <thead className='bg-gray-100'>
          <tr>
            {Object.keys(headings[0]).map((key, index) => (
              <th key={index} className='px-6 py-4 border border-gray-300'>
                <PrismicRichText field={headings[0][key]} />
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {Object.keys(row).map((key, colIndex) => (
                <td key={colIndex} className='px-6 py-4 border border-gray-300'>
                  <PrismicRichText field={row[key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
