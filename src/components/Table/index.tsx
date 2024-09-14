import React, { ReactNode } from "react";

import TableButtons from "./TableButtons";

export default function Table(): ReactNode {
  return (
    <div className="flex">
      <TableButtons />
    </div>
  );
}
