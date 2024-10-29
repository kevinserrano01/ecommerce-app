import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import { shopApi } from "../services/shopService";
import { receiptApi } from "../services/receiptsService";

export const store = configureStore({
  reducer: {
    shopSlice,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [receiptApi.reducerPath]: receiptApi.reducer,
  }, // Agregar reducers aquí
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(receiptApi.middleware),
});
