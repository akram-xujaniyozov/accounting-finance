import React, { ReactNode } from "react";

import Remains from "../../components/Remains";
import Table from "../../components/Table";

export default function Main(): ReactNode {
  return (
    <div className="flex flex-col gap-y-8">
      <Remains />
      <Table />
    </div>
  );
}
