import React, { ReactNode, CSSProperties } from "react";
import { Menu } from "antd";
import { MenuElementProps } from "./types";

export default function MenuElement({
  items,
  mode,
  defaultOpenKeys,
  defaultSelectedKeys,
  theme,
  styles,
}: MenuElementProps): ReactNode {
  return (
    <Menu
      style={styles}
      items={items}
      defaultOpenKeys={defaultOpenKeys}
      mode={mode}
      theme={theme}
      defaultSelectedKeys={defaultSelectedKeys}
    />
  );
}
