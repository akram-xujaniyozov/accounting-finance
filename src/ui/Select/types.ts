import { CSSProperties } from "react";
import type { LabeledValue } from "antd/es/select";

export interface SelectProps {
  options: { label: string | number; value: string | number | undefined }[];
  placeholder?: string;
  className: string | undefined;
  styles?: CSSProperties;
  defaultValue?:
    | string
    | string[]
    | number
    | number[]
    | LabeledValue
    | LabeledValue[];
  variant: "outlined" | "borderless" | "filled";
}
