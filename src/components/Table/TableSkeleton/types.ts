import React, { Dispatch, SetStateAction } from "react";

export type Product = {
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
  allProducts: Product[] | undefined;
  singleProduct: Product[] | undefined;
  onEditProduct: Dispatch<SetStateAction<Product[]>>;
};
