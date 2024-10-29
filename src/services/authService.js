import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, base_auth_url } from "../firebase/database";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `accounts:signInWithPassword?key=${API_KEY}`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: "POST",
        body: { ...auth },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
