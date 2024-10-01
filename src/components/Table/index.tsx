import React, { ReactNode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";

import {
  useGetProductsQuery,
  useGetFilteredProductsQuery,
  useGetSortingItemsQuery,
} from "../../modules/Main/model/service/productsApi";
import { switchActiveRequest } from "../../modules/Main/model/activeRequest/slice";
import { selectfilter } from "../../modules/Main/model/filterProduct/selectors";
import { selectActiveRequest } from "../../modules/Main/model/activeRequest/selectors";

import { SortConfig, SortOrder, Product } from "./types";

// components
import TableButtons from "./TableButtons";
import TableSkeleton from "./TableSkeleton";

export default function Table(): ReactNode {
  const dispatch = useAppDispatch();
  const filterProductData = useSelector(selectfilter);
  const activeRequest = useSelector(selectActiveRequest);
  const [isLoadingSort, setIsLoadingSort] = useState<boolean>(false);

  // Sorting State
  const [sortConfig, setSortConfig] = useState<SortConfig>({ direction: null });

  const { data: products } = useGetProductsQuery(name, {
    skip: activeRequest,
  });
  const { data: filteredProducts } = useGetFilteredProductsQuery(
    filterProductData,
    {
      skip: activeRequest,
    }
  );

  // Sorting Table Items

  const { data: sortedProducts } = useGetSortingItemsQuery(
    {
      sortBy: sortConfig?.key,
      sortOrder: sortConfig?.direction,
    },
    { skip: activeRequest }
  );

  function handleSortItem(key: string) {
    let direction: SortOrder;
    if (sortConfig && sortConfig.direction === null) {
      direction = "asc";
      setSortConfig({ key, direction });
    } else if (sortConfig && sortConfig.direction === "asc") {
      direction = "desc";
      setSortConfig({ key, direction });
    } else if (sortConfig && sortConfig.direction === "desc") {
      direction = null;
      setSortConfig({ direction });
    }
  }

  function handleDownloadClick() {
    dispatch(switchActiveRequest());
  }

  let datas: Product[] =
    filteredProducts && filteredProducts?.length > 0
      ? filteredProducts
      : sortedProducts && sortedProducts?.length > 0
      ? sortedProducts
      : products && products.length > 0
      ? products
      : [];

  return (
    <div className="flex flex-col">
      <TableButtons onDownloadClick={handleDownloadClick} />
      <TableSkeleton
        datas={datas}
        onSortedItems={handleSortItem}
        sortConfig={sortConfig}
      />
    </div>
  );
}
