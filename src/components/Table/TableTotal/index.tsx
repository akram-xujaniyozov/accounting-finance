import React, { ReactNode } from "react";
import { Product } from "../TableSkeleton/types";

export default function TableTotal({ data }: { data: Product[] }): ReactNode {
  function calculateOverallAmount(array: Product[], property: string) {
    return array
      .map((product) => Number(product[property]))
      .reduce((prev, cur) => prev + cur, 0);
  }

  const availableToOrder = calculateOverallAmount(data, "availableToOrder");
  const productOnRoad = calculateOverallAmount(data, "productOnRoad");
  const totalAmout = calculateOverallAmount(data, "totalAmout");

  return (
    <div>
      {data.length > 0 && (
        <div className="flex gap-1 bg-white p-1 w-[1050px]">
          <div className="grow bg-lightengray py-6 px-2 rounded-tl-lg rounded-bl-lg">
            <span className="text-lg font-extralight">Итого:</span>
          </div>
          <div className="basis-36 bg-lightengray py-6 px-2 text-center">
            <span>{availableToOrder}</span>
          </div>
          <div className="basis-[100px] bg-lightengray py-6 px-2 text-center">
            <span>{productOnRoad}</span>
          </div>
          <div className="basis-[169px] grow-1 bg-lightengray py-6 px-2 rounded-tr-lg rounded-br-lg text-center">
            <span>{totalAmout}</span>
          </div>
        </div>
      )}
    </div>
  );
}
