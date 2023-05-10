import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices";

export const store = configureStore({
	reducer: {
		products: productsSlice.reducer,
	},
});
