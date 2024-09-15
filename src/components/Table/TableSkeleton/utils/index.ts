import { Column } from "react-table";
import { AllProducts } from "../types";

export const columns: Column<AllProducts>[] = [
  { Header: "Баркод", accessor: "barcode" },
  { Header: "Предмет", accessor: "predmet" },
  { Header: "Артикул поставщика", accessor: "article" },
  { Header: "Размер", accessor: "size" },
  { Header: "Доступно к заказу", accessor: "availableToOrder" },
  { Header: "Товар в пути", accessor: "productOnRoad" },
  { Header: "Итого кол-во товаров", accessor: "totalAmout" },
];
