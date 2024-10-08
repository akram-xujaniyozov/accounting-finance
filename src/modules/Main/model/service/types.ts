export interface Product {
  id: string;
  barcode: number;
  predmet: string;
  article: string;
  size: number | null;
  availableToOrder: number;
  productOnRoad: number;
  totalAmout: number;
}
