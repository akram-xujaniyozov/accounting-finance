import React, { ReactNode } from "react";

import RemainsForm from "../../components/Remains";
import Table from "../../components/Table";

export default function Main(): ReactNode {
  return (
    <div>
      <RemainsForm />
      <Table />
    </div>
  );
}
