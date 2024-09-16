import { CSSProperties } from "react";
import type { LabeledValue } from "antd/es/select";

interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  className: string | undefined;
  placeholder?: string;
  styles?: CSSProperties;
  defaultValue?: string;
  variant: "outlined" | "borderless" | "filled";
  onChange: (value: string, option: Option | Array<Option>) => void;
}
