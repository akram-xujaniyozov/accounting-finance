import React, { ReactNode } from "react";
import { DatabaseFilled } from "@ant-design/icons";
// components
import Form from "../Form";
// UI kit
import Button from "../../ui/Button";

export default function RemainsForm(): ReactNode {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <h3 className="text-black text-3xl font-normal">
          Остатки сформированы на 01.04.2023 г.
        </h3>
        <Button
          type="primary"
          size="middle"
          shape="round"
          icon={<DatabaseFilled />}
          className="bg-darkenblue text-xs"
          styles={{ paddingLeft: "8px", paddingRight: "8px" }}
        >
          Инструкции
        </Button>
      </div>
      <Form />
    </div>
  );
}
