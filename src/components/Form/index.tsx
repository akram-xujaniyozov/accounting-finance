import React, { ReactNode } from "react";
import { ExportOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";
import { useGetAllProductsQuery } from "../../modules/Main/store/reducer";

// components
import InputField from "./InputField";
import SelectField from "./SelectField";
// UI kit
import Button from "../../ui/Button";

const headersOfTable: string[] = [
  "Баркод",
  "Предмет",
  "Артикул поставщика",
  "Размер",
  "Доступно к заказу",
  "Товар в пути",
  "Итого кол-во товаров",
];

export default function Form(): ReactNode {
  const { data: products } = useGetAllProductsQuery();

  return (
    <form className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <InputField
          variant="filled"
          label="Баркод"
          placeholder="233456234567878789"
          width="28%"
          maxLength={18}
        />
        <InputField
          variant="filled"
          label="Артикул"
          placeholder="ДжЙСинМом0823"
          width="25%"
          maxLength={13}
        />
        <InputField
          variant="filled"
          label="Размер"
          placeholder="44"
          width="14%"
          maxLength={2}
        />
        <SelectField
          width="15%"
          styles={{ width: 100 }}
          variant="borderless"
          defaultValue="Джинсы"
          options={[
            { value: "jeans", label: "Джинсы" },
            { value: "pants", label: "Брюки" },
            { value: "cardigan", label: "Кардиган " },
          ]}
          label="Категория"
          className="border-0"
        />
      </div>
      <div className="flex items-center gap-1">
        <Button
          type="primary"
          size="small"
          className="text-sm rounded-3xl px-3 py-5"
        >
          Сформировать
        </Button>
        <CSVLink data={[]} filename="Table.csv">
          <Button
            type="primary"
            size="small"
            className="bg-darkenblue text-sm rounded-3xl px-3 py-5"
            icon={<ExportOutlined />}
          >
            Экспорт
          </Button>
        </CSVLink>
      </div>
    </form>
  );
}
