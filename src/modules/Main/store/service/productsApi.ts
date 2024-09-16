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
      { barcode: string; article: string; size: number | ""; predmet: string }
    >({
      query: ({ barcode, article, size, predmet }) =>
        `products/?barcode=${barcode}&article=${article}&size=${size}&predmet=${predmet}`,
    }),
    updateProduct: builder.mutation<Product[], Partial<Product>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `products/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} = productsApi;
