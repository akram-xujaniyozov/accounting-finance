import React, { ReactNode } from "react";
import type { MenuProps } from "antd";
import {
  CloseOutlined,
  SettingFilled,
  CopyFilled,
  SnippetsFilled,
  DatabaseFilled,
} from "@ant-design/icons";

// UI Kit
import Button from "../../ui/Button";
import Menu from "../../ui/Menu";

type MenuItem = Required<MenuProps>["items"][number];

const menuItems: MenuItem[] = [
  {
    key: "1",
    label: "Настройки",
    icon: <SettingFilled />,
    children: [{ key: "p1", label: "Option" }],
  },
  { type: "divider" },
  {
    key: "2",
    label: "Внесение данных",
    icon: <CopyFilled />,
    children: [{ key: "p2", label: "Option" }],
  },
  { type: "divider" },
  {
    key: "3",
    label: "Отчёты",
    icon: <SnippetsFilled />,
    children: [{ key: "p3", label: "Option" }],
  },
  { type: "divider" },
  {
    key: "4",
    icon: <DatabaseFilled />,
    label: "База знания",
    children: [{ key: "p4", label: "Option" }],
  },
];

export default function FinanceControl(): ReactNode {
  return (
    <div className="bg-darkerblue pt-6 p-4 rounded-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-white">
          <span className="bg-blue-500 text-white rounded-md px-1">ФИН</span>{" "}
          Контроль
        </h2>
        <Button
          type="primary"
          shape="round"
          icon={<CloseOutlined />}
          size="small"
          iconPosition="end"
          className="bg-darkenblue text-sm text-slate-500"
        >
          Meню
        </Button>
      </div>
      <div className="mt-6 rounded-md overflow-hidden">
        <Menu
          items={menuItems}
          mode="inline"
          theme="dark"
          styles={{ backgroundColor: "#263049" }}
        />
      </div>
    </div>
  );
}
