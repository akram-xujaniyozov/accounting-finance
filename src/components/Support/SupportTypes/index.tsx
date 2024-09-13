import React, { ReactNode } from "react";

export default function SupportTypes({ type }: { type: string }): ReactNode {
  return (
    <li className="py-2 border-b-[1px] border-slate-500">
      <p className="text-sm text-slate-500">{type}</p>
    </li>
  );
}
