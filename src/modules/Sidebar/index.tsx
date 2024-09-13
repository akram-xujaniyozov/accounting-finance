import React, { ReactNode } from "react";
import { WechatOutlined } from "@ant-design/icons";

// components
import FinanceControl from "../../components/FinanceControl";
import Support from "../../components/Support";
// UI kit
import Button from "../../ui/Button";

export default function Sidebar(): ReactNode {
  return (
    <div className="flex flex-col items-stretch gap-1">
      <FinanceControl />
      <Support />
      <Button
        type="primary"
        size="large"
        icon={<WechatOutlined />}
        className="py-8 text-xl rounded-3xl"
      >
        Связаться с нами
      </Button>
    </div>
  );
}
