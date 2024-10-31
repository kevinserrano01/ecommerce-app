import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import { shopApi } from "../services/shopService";
import { receiptApi } from "../services/receiptsService";
import { authApi } from "../services/authService";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    shopSlice,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [receiptApi.reducerPath]: receiptApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  }, // Agregar reducers aquí
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(receiptApi.middleware)
      .concat(authApi.middleware),
});
