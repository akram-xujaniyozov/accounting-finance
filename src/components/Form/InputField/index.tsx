import React, { ReactNode } from "react";

import FormElementsContainer from "../layout/FormElementsContainer";
// UI Kit
import Input from "../../../ui/Input";
import { InputProps } from "../../../ui/Input/types";

interface InputFieldProps extends InputProps {
  label: string;
  width: string;
}

export default function InputField({
  variant,
  label,
  placeholder,
  width,
  maxLength,
}: InputFieldProps): ReactNode {
  return (
    <FormElementsContainer
      width={width}
      className="flex items-center p-2 rounded-[18px] bg-white"
    >
      <label className="text-slate-950 text-xs mr-2">{label}</label>
      <Input
        variant={variant}
        placeholder={placeholder}
        className="text-xs p-3 rounded-2xl text-center"
        maxLength={maxLength}
      />
    </FormElementsContainer>
  );
}
