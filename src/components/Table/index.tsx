import React, { ReactNode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";

import {
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../modules/Main/store/service/productsApi";
import { switchActiveRequest } from "../../modules/Main/store/activeRequest/slice";
import { selectfilter } from "../../modules/Main/store/filterProduct/selectors";
import { selectActiveRequest } from "../../modules/Main/store/activeRequest/selectors";

import { Product } from "./TableSkeleton/types";

// components
import TableButtons from "./TableButtons";
import TableSkeleton from "./TableSkeleton";

export default function Table(): ReactNode {
  const [editProduct, setEditProduct] = useState<Product[]>([]);

  const dispatch = useAppDispatch();
  const filterProductData = useSelector(selectfilter);
  const activeRequest = useSelector(selectActiveRequest);

  const { data: products } = useGetProductsQuery(name, {
    skip: activeRequest,
  });
  const { data: product } = useGetProductQuery(filterProductData, {
    skip: activeRequest,
  });

  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (editProduct?.length > 0) {
      updateProduct(editProduct[0]);
    }
  }, [editProduct]);

  function handleDownloadClick() {
    dispatch(switchActiveRequest());
  }

  return (
    <div className="flex flex-col">
      <TableButtons onDownloadClick={handleDownloadClick} />
      <TableSkeleton
        allProducts={products}
        singleProduct={product}
        onEditProduct={setEditProduct}
      />
    </div>
  );
}
