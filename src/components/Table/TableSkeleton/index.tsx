import React, { ChangeEvent, ReactNode, useState } from "react";
import { useTable, Row, Cell } from "react-table";

// Types of component
import { Product, TableSkeletonProps } from "./types";
import { columns } from "./utils/index";

export default function TableSkeleton({
  allProducts,
  singleProduct,
  onEditProduct,
}: TableSkeletonProps): ReactNode {
  const [editRowId, setEditRowId] = useState<string>("");
  const [editCellId, setEditCellId] = useState<string>("");
  const [cellValue, setCellValue] = useState<string>("");

  const products = allProducts ? allProducts : [];
  const product = singleProduct ? singleProduct : [];
  const data = product.length > 0 ? product : products;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Product>({
      data,
      columns,
    });

  function handleEditClick(cell: Cell<Product>, row: Row<Product>) {
    setEditRowId(row.id);
    setEditCellId(cell.column.id);
  }

  function handleBlur() {
    const editProduct: Product[] = data
      .filter((product) => +product.id === +editRowId + 1)
      .map((editprod) => {
        return {
          ...editprod,
          [editCellId]: cellValue,
        };
      });

    onEditProduct((prev) => [...prev, ...editProduct]);

    setEditCellId("");
    setEditRowId("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCellValue(e.target.value);
  }

  return (
    <div className="bg-white mt-3 p-3 rounded-2xl  max-w-[1000px] overflow-x-auto  scrollbar">
      <table {...getTableProps()} className="w-[1050px]">
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      onDoubleClick={() => handleEditClick(cell, row)}
                      key={`${index}_${cell.value}`}
                      className="px-8 py-4 text-darkerblue text-sm font-medium border-4 border-white text-center"
                    >
                      {row.id === editRowId && cell.column.id === editCellId ? (
                        <div>
                          <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoFocus
                          />
                        </div>
                      ) : (
                        <span>{cell.render("Cell")}</span>
                      )}
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
