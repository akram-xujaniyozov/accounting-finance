import React, { ReactNode } from "react";

import Button from "../../../ui/Button";

export default function TableButtons(): ReactNode {
  return (
    <div className="flex items-center justify-between basis-4/5 border-y-[1px]">
      <div className="flex items-center">
        <Button type="link" size="small" shape="default" className="">
          Загрузить данные из csv
        </Button>
        <Button type="link" size="small" shape="default" className="">
          Изменить данные
        </Button>
      </div>
      <div>
        <Button type="link" size="small" shape="default" className="">
          Очистить
        </Button>
      </div>
    </div>
  );
}
