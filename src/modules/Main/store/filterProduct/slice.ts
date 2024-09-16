import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { FilterProduct } from "./types";

const initialState: FilterProduct = {
  barcode: "",
  article: "",
  size: null,
  predmet: "",
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    filteringProduct: (state, action: PayloadAction<FilterProduct>) => {
      state.barcode = action.payload.barcode;
      state.article = action.payload.article;
      state.size = action.payload.size;
      state.predmet = action.payload.predmet;
    },
  },
});

const { filteringProduct } = filterProductSlice.actions;

export { filterProductSlice, filteringProduct };
