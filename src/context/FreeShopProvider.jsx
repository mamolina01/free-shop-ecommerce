import React, { useEffect, useState } from "react";
import { FreeShopContext } from "./FreeShopContext";

export const FreeShopProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [shoppingCart, setShoppingCart] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const addProduct = (newProduct) => {
		const exists = shoppingCart.find((item) => item.title === newProduct.title);
		if (!exists) {
			newProduct.amount = 1;
			setShoppingCart([...shoppingCart, newProduct]);
			localStorage.setItem(
				"shoppingCart",
				JSON.stringify([...shoppingCart, newProduct])
			);
		} else {
			const tempCart = [...shoppingCart];
			const item = tempCart.find((item) => item.id === newProduct.id);
			item.amount = item.amount + 1;
			setShoppingCart(tempCart);
			localStorage.setItem("shoppingCart", JSON.stringify(tempCart));
		}
	};

	const removeProduct = (product) => {
		const newShoppingCart = shoppingCart.filter(
			(item) => item.title !== product.title
		);
		setShoppingCart(newShoppingCart);
	};

	useEffect(() => {
		const products = JSON.parse(localStorage.getItem("shoppingCart"));
		if (products) {
			setShoppingCart(products);
		}
	}, []);

	return (
		<FreeShopContext.Provider
			value={{
				products,
				setProducts,
				filteredProducts,
				setFilteredProducts,
				shoppingCart,
				addProduct,
				removeProduct,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</FreeShopContext.Provider>
	);
};
