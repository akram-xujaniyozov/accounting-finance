import { ReactNode, CSSProperties } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";

export interface ButtonProps {
  type: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  size: SizeType;
  children: string | undefined;
  className: string;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  iconPosition?: "start" | "end" | undefined;
  styles?: CSSProperties;
}
