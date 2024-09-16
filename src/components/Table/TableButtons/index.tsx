import React, { ReactNode } from "react";
import {
  CloseOutlined,
  FolderFilled,
  FolderAddFilled,
} from "@ant-design/icons";

// UI kit
import Button from "../../../ui/Button";
// Types of component
import { TableButtonsProps } from "./types";

export default function TableButtons({
  onDownloadClick,
}: TableButtonsProps): ReactNode {
  return (
    <div className="flex items-center justify-between w-5/6 border-y border-zinc-300 py-2">
      <div className="flex items-center gap-4">
        <Button
          type="link"
          size="small"
          shape="default"
          className="text-base text-darkerblue font-extralight"
          icon={<FolderFilled />}
          iconPosition="start"
          onClick={onDownloadClick}
        >
          Загрузить данные из csv
        </Button>
        <Button
          type="link"
          size="small"
          shape="default"
          className="text-base text-darkerblue font-extralight"
          icon={<FolderAddFilled />}
          iconPosition="start"
        >
          Изменить данные
        </Button>
      </div>
      <div className="pl-8 border-l border-zinc-300">
        <Button
          type="link"
          size="small"
          shape="default"
          className="text-base text-darkerblue font-extralight"
          icon={<CloseOutlined />}
          iconPosition="end"
        >
          Очистить
        </Button>
      </div>
    </div>
  );
}
