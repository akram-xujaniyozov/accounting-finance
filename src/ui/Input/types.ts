import { CSSProperties, ChangeEvent } from "react";

export interface InputProps {
  value: null | number | string;
  variant: "filled" | "outlined" | "borderless" | undefined;
  placeholder: string | undefined;
  styles?: CSSProperties;
  className?: string | undefined;
  maxLength?: number | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
