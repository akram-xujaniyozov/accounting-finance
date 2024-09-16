import React, { ReactNode } from "react";
import SupportType from "./Support";
import SupportContact from "./SupportContact";

const supportTypes: { id: string; label: string }[] = [
  {
    id: "1",
    label: "Пользовательское  соглашение",
  },
  {
    id: "2",
    label: "Политика конфиденциальности",
  },
  {
    id: "3",
    label: "Юридическая информация",
  },
  {
    id: "4",
    label: "Публичная оферта",
  },
];

export default function Support(): ReactNode {
  return (
    <div className="flex flex-col gap-4 bg-darkerblue p-4 pr-10 rounded-2xl">
      <h3 className="text-white text-sm">Техническая поддержка</h3>
      <SupportContact />
      <div>
        <p className="text-xs text-slate-500 mb-1">Часы работы </p>
        <h4 className="text-sm text-white">Пн-Пт с 9:00 до 19:00 мск</h4>
      </div>
      <ul>
        {supportTypes.map((type) => (
          <SupportType key={type.id} type={type.label} />
        ))}
      </ul>
    </div>
  );
}
