import React, { ReactNode } from "react";
import { Button } from "antd";
import { ButtonProps } from "./types";

export default function ButtonElement({
  type,
  size,
  shape,
  icon,
  onClick,
  children,
  iconPosition,
  className,
  styles,
}: ButtonProps): ReactNode {
  return (
    <Button
      type={type}
      size={size}
      shape={shape}
      icon={icon}
      onClick={onClick}
      iconPosition={iconPosition}
      className={className}
      style={styles}
    >
      {children}
    </Button>
  );
}
