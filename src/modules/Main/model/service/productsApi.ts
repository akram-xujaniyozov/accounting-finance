import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Product } from "./types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products`,
      providesTags: ["Products"],
    }),
    getProduct: builder.query<
      Product[],
      {
        barcode: string;
        article: string;
        size: number | "" | null;
        predmet: string;
      }
    >({
      query: ({ barcode, article, size, predmet }) =>
        `products/?barcode=${barcode}&article=${article}&size=${size}&predmet=${predmet}`,
    }),
    updateProduct: builder.mutation<Product[], Partial<Product>>({
      query: (data) => ({
        url: `products/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} = productsApi;
