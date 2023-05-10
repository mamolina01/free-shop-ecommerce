import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	filteredProducts:[],
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
		setFilteredProducts:(state,{payload})=>{
			state.isLoading=false
			state.filteredProducts=payload
		}
	},
});

export const { startLoadingProducts, setProducts,setFilteredProducts } = productsSlice.actions;
