import React, { ReactNode } from "react";

export default function first(): ReactNode {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-500 mb-1">Номер поддержки</p>
        <h4 className="text-sm text-white">8 (999) 999 99 99</h4>
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-1">Почта поддержки</p>
        <h4 className="text-sm text-white">pf1@werthesest.ru</h4>
      </div>
    </div>
  );
}
