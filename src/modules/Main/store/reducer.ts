import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Products } from "./types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Products[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
