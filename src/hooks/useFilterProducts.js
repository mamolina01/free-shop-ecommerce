import { useContext, useEffect } from "react";
import { FreeShopContext } from "../context";

export const useFilterProducts = (filterItem, filterBy) => {
	const { products, setFilteredProducts, setIsLoading } =
		useContext(FreeShopContext);

	const manageApi = async () => {
		try {
			const response = await fetch(
				`https://fakestoreapi.com/products/category/${filterItem}`
			)
				.then((response) => response.json())
				.then((result) => result);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const getCategories = async () => {
		setIsLoading(true);
		try {
			const result = await manageApi();
			setFilteredProducts(result);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		let result = [];
		switch (filterBy) {
			case "price":
				result = products.filter((product) => product.price < filterItem);
				setFilteredProducts(result);
				break;
			case "rate":
				result = products.filter((product) => product.rating.rate < filterItem);
				setFilteredProducts(result);
				break;
			case "category":
				getCategories(filterItem);
				break;
			case "":
				setFilteredProducts([]);
				break;
		}
	}, [filterItem]);
};
