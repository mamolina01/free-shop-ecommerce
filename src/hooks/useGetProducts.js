import { useEffect, useState } from "react";

export const useGetProducts = (query="") => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const manageApi = async () => {
		try {
			// const response = await fetch(`https://fakestoreapi.com/products/${query}?limit=${limit*8}`)
			const response = await fetch(`https://fakestoreapi.com/products/${query}`)
				.then((response) => response.json())
				.then((result) => result);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const getProducts = async () => {
		// setIsLoading(true)
		try {
			const products = await manageApi();
			// console.log(products);
			setProducts(products);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);

	};

	useEffect(() => {
		getProducts();
	}, []);

	return { products, isLoading };
};
