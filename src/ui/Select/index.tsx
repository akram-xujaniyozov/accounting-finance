import React, { ReactNode } from "react";
import { Select } from "antd";
import { SelectProps } from "./types";

export default function SelectElement({
  options,
  placeholder,
  className,
  styles,
  defaultValue,
  variant,
  onChange,
}: SelectProps): ReactNode {
  return (
    <Select
      variant={variant}
      options={options}
      placeholder={placeholder}
      className={className}
      style={styles}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
