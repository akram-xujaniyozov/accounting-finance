import { CSSProperties, ChangeEvent } from "react";

export interface InputProps {
  value: string | number;
  variant: "filled" | "outlined" | "borderless" | undefined;
  placeholder: string | undefined;
  styles?: CSSProperties;
  className?: string | undefined;
  maxLength?: number | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
