import React, { ReactNode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";

import {
  useGetProductsQuery,
  useGetProductQuery,
} from "../../modules/Main/model/service/productsApi";
import { switchActiveRequest } from "../../modules/Main/model/activeRequest/slice";
import { selectfilter } from "../../modules/Main/model/filterProduct/selectors";
import { selectActiveRequest } from "../../modules/Main/model/activeRequest/selectors";

import { Product } from "./TableSkeleton/types";

// components
import TableButtons from "./TableButtons";
import TableSkeleton from "./TableSkeleton";

export default function Table(): ReactNode {
  const dispatch = useAppDispatch();
  const filterProductData = useSelector(selectfilter);
  const activeRequest = useSelector(selectActiveRequest);

  const { data: products } = useGetProductsQuery(name, {
    skip: activeRequest,
  });
  const { data: product } = useGetProductQuery(filterProductData, {
    skip: activeRequest,
  });

  function handleDownloadClick() {
    dispatch(switchActiveRequest());
  }

  return (
    <div className="flex flex-col">
      <TableButtons onDownloadClick={handleDownloadClick} />
      <TableSkeleton allProducts={products} singleProduct={product} />
    </div>
  );
}
