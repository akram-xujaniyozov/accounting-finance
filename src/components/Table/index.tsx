import React, { ReactNode, useState } from "react";

import TableButtons from "./TableButtons";
import TableSkeleton from "./TableSkeleton";

import { useGetAllProductsQuery } from "../../modules/Main/store/reducer";

export default function Table(): ReactNode {
  const [skip, setSkip] = useState<boolean>(true);
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useGetAllProductsQuery(name, { skip });

  function handleClick() {
    setSkip((prev) => !prev);
  }

  return (
    <div className="flex flex-col">
      <TableButtons onClick={handleClick} />
      <TableSkeleton allProducts={products} />
    </div>
  );
}
