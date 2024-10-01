import React, { ChangeEvent, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { useTable, Row, Cell } from "react-table";
import { CaretDownOutlined } from "@ant-design/icons";

// Edit product
import { useUpdateProductMutation } from "../../../modules/Main/model/service/productsApi";
// Types of component
import { Product, TableSkeletonProps } from "./types";
import { columns, headerTitles } from "./utils/index";
import TableTotal from "../TableTotal";

export default function TableSkeleton({
  datas,
  onSortedItems,
  sortConfig,
}: TableSkeletonProps): ReactNode {
  const [updateProduct] = useUpdateProductMutation();

  const [editRowId, setEditRowId] = useState<string>("");
  const [editCellId, setEditCellId] = useState<string>("");
  const [cellValue, setCellValue] = useState<string>("");
  const [cellOldValue, setCellOldValue] = useState<string>("");

  const data = datas && datas?.length > 0 ? datas : [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Product>({
      data,
      columns,
    });

  // Editing cell of table
  function handleEditClick(cell: Cell<Product>, row: Row<Product>) {
    setEditRowId(row.id);
    setEditCellId(cell.column.id);
    setCellOldValue(cell.value);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const valueEntered = e.target.value;
    const checkNumber = !isNaN(+valueEntered)!;

    if (headerTitles.includes(editCellId) && !checkNumber) {
      setCellValue(cellOldValue);
      return;
    }

    setCellValue(valueEntered);
  }

  async function handleBlur() {
    const editProduct: Product[] = data
      .filter((product) => +product.id === +editRowId + 1)
      .map((editprod) => {
        return {
          ...editprod,
          [editCellId]: cellValue,
        };
      });

    if (editCellId && editProduct) {
      await updateProduct(editProduct[0]);
    }

    setEditCellId("");
    setEditRowId("");
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
                  <span
                    className="pl-1 hover:cursor-pointer"
                    onClick={() => onSortedItems(column.id)}
                  >
                    <CaretDownOutlined
                      style={{ color: "#0080ff" }}
                      rotate={
                        sortConfig?.key === column.id &&
                        sortConfig.direction === "asc"
                          ? 180
                          : 0
                      }
                    />
                  </span>
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
                      className="px-10 py-4 text-darkerblue text-sm font-medium border-4 border-white text-center"
                    >
                      {row.id === editRowId && cell.column.id === editCellId ? (
                        <div>
                          <input
                            className="text-center text-sm w-32"
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
      {data.length > 0 && <TableTotal data={data} />}
    </div>
  );
}
