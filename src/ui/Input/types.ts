import { CSSProperties } from "react";

export interface InputProps {
  variant: "filled" | "outlined" | "borderless" | undefined;
  placeholder: string | undefined;
  styles?: CSSProperties;
  className?: string | undefined;
}
