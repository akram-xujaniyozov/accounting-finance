import React, { ReactNode } from "react";
import { Tag } from "antd";

import { TagProps } from "./types";

export default function TagElement({
  children,
  className,
  styles,
  icon,
  color,
}: TagProps): ReactNode {
  return (
    <Tag icon={icon} color={color} className={className} style={styles}>
      {children}
    </Tag>
  );
}
