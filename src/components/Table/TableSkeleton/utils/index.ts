import { Column } from "react-table";
import { Product } from "../types";

export const columns: Column<Product>[] = [
  { Header: "Баркод", accessor: "barcode" },
  { Header: "Предмет", accessor: "predmet" },
  { Header: "Артикул поставщика", accessor: "article" },
  { Header: "Размер", accessor: "size" },
  { Header: "Доступно к заказу", accessor: "availableToOrder" },
  { Header: "Товар в пути", accessor: "productOnRoad" },
  { Header: "Итого кол-во товаров", accessor: "totalAmout" },
];

export const headerTitles: string[] = [
  "barcode",
  "size",
  "availableToOrder",
  "productOnRoad",
  "totalAmout",
];
