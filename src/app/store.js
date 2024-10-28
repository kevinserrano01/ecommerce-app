import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import { shopApi } from "../services/shopService";

export const store = configureStore({
  reducer: {
    shopSlice,
    [shopApi.reducerPath]: shopApi.reducer,
  }, // Agregar reducers aquí
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
