import React, { CSSProperties, ReactNode } from "react";

import FormElementsContainer from "../layout/FormElementsContainer";
// UI kit
import Select from "../../../ui/Select";
import { SelectProps } from "../../../ui/Select/types";

interface SelectFieldProps extends SelectProps {
  labelName: string;
  width: string;
}

export default function SelectField({
  labelName,
  width,
  placeholder,
  options,
  styles,
  className,
  defaultValue,
  variant,
  onChange,
}: SelectFieldProps): ReactNode {
  return (
    <FormElementsContainer
      width={width}
      className="flex flex-col items-center p-1 rounded-[18px] bg-white"
    >
      <label className="text-zinc-500 text-xs mr-2 ">{labelName}</label>
      <Select
        variant={variant}
        options={options}
        placeholder={placeholder}
        styles={styles}
        className={className}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </FormElementsContainer>
  );
}
