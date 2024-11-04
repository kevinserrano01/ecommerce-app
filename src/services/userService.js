import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { database } from "../firebase/database";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: database }),
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
