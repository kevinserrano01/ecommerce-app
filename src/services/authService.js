import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_AUTH_URL }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${process.env.EXPO_PUBLIC_API_KEY}`,
        method: "POST",
        body: auth,
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_API_KEY}`,
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
