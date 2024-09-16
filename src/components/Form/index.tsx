import React, { ReactNode, useState } from "react";
import { ExportOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import {
  useGetProductsQuery,
  useGetProductQuery,
} from "../../modules/Main/store/service/productsApi";
import { useAppDispatch } from "../../store";
import { selectfilter } from "../../modules/Main/store/filterProduct/selectors";
import { filteringProduct } from "../../modules/Main/store/filterProduct/slice";
import { selectActiveRequest } from "../../modules/Main/store/activeRequest/selectors";

// components
import InputField from "./InputField";
import SelectField from "./SelectField";
// UI kit
import Button from "../../ui/Button";

export default function Form(): ReactNode {
  const dispatch = useAppDispatch();
  const filterProductData = useSelector(selectfilter);
  const activeRequest = useSelector(selectActiveRequest);
  const [enteredBarcode, setEnteredBarcode] = useState<string>("");
  const [enteredArticle, setEnteredArticle] = useState<string>("");
  const [enteredSize, setEnteredSize] = useState<number | "">("");
  const [enteredPredmet, setEnteredPredmet] = useState<string>("");

  const { data: products } = useGetProductsQuery(name, { skip: activeRequest });
  const { data: product } = useGetProductQuery(filterProductData, {
    skip: activeRequest,
  });

  const data = products?.map(
    ({
      barcode,
      predmet,
      article,
      size,
      availableToOrder,
      productOnRoad,
      totalAmout,
    }) => {
      return {
        Баркод: barcode,
        Предмет: predmet,
        "Артикул поставщика": article,
        Размер: size,
        "Доступно к заказу": availableToOrder,
        "Товар в пути": productOnRoad,
        "Итого кол-во товаров": totalAmout,
      };
    }
  );

  function handleClick() {
    dispatch(
      filteringProduct({
        barcode: enteredBarcode,
        article: enteredArticle,
        predmet: enteredPredmet,
        size: enteredSize,
      })
    );

    setEnteredBarcode("");
    setEnteredArticle("");
    setEnteredPredmet("");
    setEnteredSize("");
  }

  return (
    <form className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <InputField
          value={enteredBarcode}
          variant="filled"
          label="Баркод"
          placeholder="233456234567878789"
          width="28%"
          maxLength={18}
          onChange={(event) => setEnteredBarcode(event.target.value)}
        />
        <InputField
          value={enteredArticle}
          variant="filled"
          label="Артикул"
          placeholder="ДжЙСинМом0823"
          width="25%"
          maxLength={13}
          onChange={(event) => setEnteredArticle(event.target.value)}
        />
        <InputField
          value={enteredSize}
          variant="filled"
          label="Размер"
          placeholder="44"
          width="14%"
          maxLength={2}
          onChange={(event) => setEnteredSize(+event.target.value)}
        />
        <SelectField
          width="15%"
          styles={{ width: 100 }}
          variant="borderless"
          defaultValue="Джинсы"
          options={[
            { value: "jeans", label: "Джинсы" },
            { value: "cloth", label: "Одежда" },
          ]}
          labelName="Категория"
          className="border-0"
          onChange={(val, option) => setEnteredPredmet(option["label"])}
        />
      </div>
      <div className="flex items-center gap-1">
        <Button
          type="primary"
          size="small"
          className="text-sm rounded-3xl px-3 py-5"
          onClick={handleClick}
        >
          Сформировать
        </Button>
        <CSVLink data={data ?? []} filename="Table.csv">
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
