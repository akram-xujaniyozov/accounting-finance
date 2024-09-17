import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";

import { productsApi } from "../modules/Main/model/service/productsApi";
import { filterProductSlice } from "../modules/Main/model/filterProduct/slice";
import { activeRequestSlice } from "../modules/Main/model/activeRequest/slice";

export const store = configureStore({
  reducer: {
    activeRequest: activeRequestSlice.reducer,
    filterProduct: filterProductSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
