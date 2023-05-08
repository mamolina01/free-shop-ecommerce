import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices";

export const store = configureStore({
	reducer: {
		products: productSlice.reducer
	},
});
