import React, { ReactNode } from "react";
import SupportTypes from "./Support";

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
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 mb-1">Номер поддержки</p>
          <h4 className="text-sm text-white">8 (999) 999 99 99</h4>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Почта поддержки</p>
          <h4 className="text-sm text-white">pf1@werthesest.ru</h4>
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-1">Часы работы </p>
        <h4 className="text-sm text-white">Пн-Пт с 9:00 до 19:00 мск</h4>
      </div>
      <ul>
        {supportTypes.map((type) => (
          <SupportTypes key={type.id} type={type.label} />
        ))}
      </ul>
    </div>
  );
}
