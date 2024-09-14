import React, { ReactNode, CSSProperties } from "react";
import { Input } from "antd";
import { InputProps } from "./types";

export default function InputElement({
  variant,
  placeholder,
  styles,
  className,
  maxLength,
}: InputProps): ReactNode {
  return (
    <Input
      variant={variant}
      placeholder={placeholder}
      style={styles}
      className={className}
      maxLength={maxLength}
    />
  );
}
