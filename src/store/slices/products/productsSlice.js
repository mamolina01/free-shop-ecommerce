import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  shoppingCart: [],
  isLoading: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    setFilteredProducts: (state, { payload }) => {
      state.isLoading = false;
      state.filteredProducts = payload;
    },
    addToCart: (state, { payload }) => {
      state.shoppingCart=payload;
    },
    removeFromCart: (state, { payload }) => {
      state.shoppingCart=payload
    },
  },
});

export const {
  startLoadingProducts,
  setProducts,
  setFilteredProducts,
  addToCart,
  removeFromCart,
} = productsSlice.actions;
