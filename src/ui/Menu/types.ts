import { CSSProperties } from "react";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export interface MenuElementProps {
  items: MenuItem[] | undefined;
  mode: "vertical" | "horizontal" | "inline";
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
  theme?: "light" | "dark";
  styles: CSSProperties;
}
