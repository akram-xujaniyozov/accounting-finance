import React, { ReactNode } from "react";
import { DatabaseFilled } from "@ant-design/icons";

import Button from "../../ui/Button";
import InputField from "../InputField";

export default function Form({}): ReactNode {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h3 className="text-black">Остатки сформированы на 01.04.2023</h3>
        <Button
          type="primary"
          size="middle"
          shape="round"
          icon={<DatabaseFilled />}
          className="bg-darkerblue"
        >
          Инструкции
        </Button>
      </div>
      <form className="flex items-center gap-10">
        <InputField />
        <InputField />
      </form>
    </div>
  );
}
