import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, base_auth_url } from "../firebase/database";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: "POST",
        body: auth,
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `accounts:signInWithPassword?key=${API_KEY}`,
        method: "POST",
        body: {
          email,
          password,
          returnSecureToken: true, // Devuelve un token de seguridad
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
