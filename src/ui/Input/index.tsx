import React, { ReactNode, CSSProperties } from "react";
import { Input } from "antd";
import { InputProps } from "./types";

export default function InputElement({
  value,
  variant,
  placeholder,
  styles,
  className,
  maxLength,
  onChange,
}: InputProps): ReactNode {
  return (
    <Input
      value={value}
      variant={variant}
      placeholder={placeholder}
      style={styles}
      className={className}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}
