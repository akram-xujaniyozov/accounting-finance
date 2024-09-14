import { CSSProperties, ReactNode } from "react";

export interface TagProps {
  children: string;
  className: string;
  styles?: CSSProperties;
  icon?: ReactNode;
  color?: string;
}
