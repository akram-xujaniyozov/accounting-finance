import React, { Dispatch, SetStateAction } from "react";

export type Product = {
  id: string;
  barcode: number;
  predmet: string;
  article: string;
  size: number;
  availableToOrder: number;
  productOnRoad: number;
  totalAmout: number;
};

export type TableSkeletonProps = {
  allProducts: Product[] | undefined;
  singleProduct: Product[] | undefined;
};
