import React, { ReactNode, CSSProperties } from "react";
import Input from "../../ui/Input";

const inputStyles: CSSProperties = {
  borderRadius: "18px",
};

export default function InputField(): ReactNode {
  return (
    <div className="flex items-center p-3 rounded-[18px] bg-white">
      <label className="text-slate-950 pr-5">Баркод </label>
      <Input
        variant="filled"
        placeholder="1213123123"
        styles={inputStyles}
        className="text-sm p-3"
      />
    </div>
  );
}
