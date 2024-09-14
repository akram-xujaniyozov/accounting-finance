import React, { ReactNode } from "react";
import { Select } from "antd";

import { SelectProps } from "antd";

export default function SelectElement({
  options,
  placeholder,
  className,
  style,
  defaultValue,
  variant,
}: SelectProps): ReactNode {
  return (
    <Select
      variant={variant}
      options={options}
      placeholder={placeholder}
      className={className}
      style={style}
      defaultValue={defaultValue}
    />
  );
}
