import React, { CSSProperties, ReactNode } from "react";

import FormElementsContainer from "../layout/FormElementsContainer";
// UI kit
import Select from "../../../ui/Select";
import { SelectProps } from "../../../ui/Select/types";

interface SelectFieldProps extends SelectProps {
  label: string;
  width: string;
}

export default function SelectField({
  label,
  placeholder,
  options,
  width,
  styles,
  className,
  defaultValue,
  variant,
}: SelectFieldProps): ReactNode {
  return (
    <FormElementsContainer
      width={width}
      className="flex flex-col items-center p-1 rounded-[18px] bg-white"
    >
      <label className="text-zinc-500 text-xs mr-2 ">{label}</label>
      <Select
        variant={variant}
        options={options}
        placeholder={placeholder}
        style={styles}
        className={className}
        defaultValue={defaultValue}
      />
    </FormElementsContainer>
  );
}
