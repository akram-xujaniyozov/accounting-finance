import React, { ReactNode } from "react";
import { MessageFilled } from "@ant-design/icons";

// components
import FinanceControl from "../../components/FinanceControl";
import Support from "../../components/Supports";
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
        icon={<MessageFilled />}
        className="py-7 text-lg rounded-3xl"
      >
        Связаться с нами
      </Button>
    </div>
  );
}
