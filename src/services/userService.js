import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, base_auth_url } from "../firebase/database";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    putProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),

    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
  }),
});

export const { usePutProfileImageMutation, useGetProfileImageQuery } = userApi;
