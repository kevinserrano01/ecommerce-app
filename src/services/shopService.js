import { createApi } from "@reduxjs/toolkit/query/react";
import { database } from "../firebase/database";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: database }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProducts: builder.query({
      query: () => `products.json`,
    }),
    getProductsByCategory: builder.query({
      query: (category) => {
        category = category.toLowerCase();
        return `products.json?orderBy="category"&equalTo="${category}"`; //Strings literal
      },
      transformResponse: (response) =>
        response ? Object.values(response) : [],
    }),
    getProduct: builder.query({
      query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) =>
        response ? Object.values(response)[0] : null,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductQuery,
} = shopApi;