import React, { ReactNode } from "react";
import { useTable } from "react-table";

// Types of component
import { AllProducts, TableSkeletonProps } from "./types";

import { columns } from "./utils/index";

export default function TableSkeleton({
  allProducts,
}: TableSkeletonProps): ReactNode {
  const data = allProducts ? allProducts : [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<AllProducts>({
      data,
      columns,
    });

  return (
    <div className="mt-5 rounded-2xl max-w-[1000px] overflow-x-auto scrollbar">
      <table {...getTableProps()} className="bg-white rounded-2xl w-[1050px]">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-4 text-darkerblue text-sm font-light text-center"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      key={`${index}_${cell.value}`}
                      className="px-8 py-4 text-darkerblue text-sm font-medium border-4 border-white text-center bg-gray-100"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
