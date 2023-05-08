import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	isLoading: false,
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		startLoadingProducts: (state) => {
			state.isLoading = false;
		},
		setProducts: (state, { payload }) => {
			state.isLoading = false;
			state.products = payload;
		},
	},
});

export const { startLoadingProducts, setProducts } = productSlice.actions;
