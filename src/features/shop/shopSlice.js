import { createSlice } from "@reduxjs/toolkit";
import categories from "../../data/categories.json";
import products from "../../data/products.json";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      categories: categories, // Agrega el json de categorias a la store de redux
      products: products, // Agrega el json de productos a la store de redux
      categorySelected: "", // Agrega la categoria seleccionada a la store de redux
      productsFilteredByCategory: [], // Agrega los productos filtrados a la store de redux
      productIdSelected: null, // Agrega el id del producto seleccionado a la store de redux
    },
  },
  reducers: {
    // Generan una accion que se puede despachar
    setCategory: (state, action) => {
      state.value.productsFilteredByCategory = products.filter(
        (product) =>
          product.category.toLowerCase() === action.payload.toLowerCase()
      ); // Filtra los productos por categoria
      state.categorySelected = action.payload; // Cambia el valor de la categoria seleccionada
    },
    setProductId: (state, action) => {
      state.productIdSelected = action.payload; // Cambia el valor del id del producto seleccionado
    },
  },
});

export const { setCategory } = shopSlice.actions; // Exporta las acciones

export default shopSlice.reducer; // Exporta el reducer
