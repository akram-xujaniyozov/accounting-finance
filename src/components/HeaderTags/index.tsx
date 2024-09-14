import React, { ReactNode } from "react";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";

// UI kit
import Tag from "../../ui/Tag";

export default function HeaderTags(): ReactNode {
  return (
    <div className="flex items-center">
      <Tag
        className="text-sm font-medium border-0 px-2 py-3 rounded-3xl bg-transparent"
        icon={<UserOutlined />}
      >
        Иванов И.И
      </Tag>
      <Tag
        className="text-sm text-[#3197ff] font-medium bg-[#e5eef8] border-0 px-3 py-3 rounded-2xl "
        icon={<CalendarOutlined />}
      >
        Тариф до 15.04.2024
      </Tag>
    </div>
  );
}
