export type Product = {
  id: string;
  barcode: number;
  predmet: string;
  article: string;
  size: number | null;
  availableToOrder: number;
  productOnRoad: number;
  totalAmout: number;
};

export type SortOrder = "asc" | "desc" | null;

export interface SortConfig {
  key?: string;
  direction: SortOrder;
}
