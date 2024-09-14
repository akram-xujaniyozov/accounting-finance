import React, { ReactNode } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

// UI kit
import Button from "../../ui/Button";

export default function HeaderButtons(): ReactNode {
  return (
    <div className="flex items-center gap-2">
      <Button
        type="default"
        size="middle"
        shape="round"
        className="p-4 text-sm"
      >
        Выйти
      </Button>
      <Button
        type="primary"
        size="small"
        shape="round"
        className="py-4 px-3 bg-[#ff5e00] text-sm"
        iconPosition="end"
        icon={<ArrowRightOutlined />}
      >
        О нас
      </Button>
    </div>
  );
}
