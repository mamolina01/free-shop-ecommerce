import { createSlice, current } from "@reduxjs/toolkit";

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
			const temp = current(state);
      let newValue={...payload}
      newValue.amount=1
			// const quantity = temp.shoppingCart.filter(
			// 	(item) => item.product === payload
			// );
			// if (quantity[0]?.amount) {
			// 	let aux = temp.shoppingCart.find(
			// 		(item) => item.product === payload
			// 	);
      //   let tempValue={...aux}
      //   tempValue.amount=tempValue.amount+1
      //   console.log(tempValue)
			// } else {
			// 	const newValue = {
			// 		product: payload,
			// 		amount: quantity.length === 0 ? 1 : quantity + 1,
			// 	};

      
				state.shoppingCart = [...temp.shoppingCart, newValue];
			// }
			// console.log([...temp.shoppingCart,newValue])
		},
		removeFromCart: (state, { payload }) => {
			const temp = current(state);
			console.log(temp);
			const newTasks = temp.shoppingCart.filter((item) => item !== payload);
			state.shoppingCart = newTasks;
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
