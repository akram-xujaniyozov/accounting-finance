import { SortConfig, Product } from "../types";

type TableSkeletonProps = {
  datas: Product[] | undefined;
  onSortedItems: (key: string) => void;
  sortConfig: SortConfig | null;
};

export { TableSkeletonProps, Product };
