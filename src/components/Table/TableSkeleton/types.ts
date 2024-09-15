export type AllProducts = {
  id: string;
  barcode: string;
  predmet: string;
  article: string;
  size: string;
  availableToOrder: string;
  productOnRoad: string;
  totalAmout: string;
};

export type TableSkeletonProps = {
  allProducts: AllProducts[] | undefined;
};
