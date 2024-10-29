import { createApi } from "@reduxjs/toolkit/query/react";
import { database } from "../firebase/database";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const receiptApi = createApi({
  reducerPath: "receiptsApi",
  baseQuery: fetchBaseQuery({ baseUrl: database }),
  endpoints: (builder) => ({
    postReceipt: builder.mutation({
      query: ({ ...receipt }) => ({
        url: `receipts.json`,
        method: "POST",
        body: { receipt },
      }),
    }),
  }),
});

export const { usePostReceiptMutation } = receiptApi;
