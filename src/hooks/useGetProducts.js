import { useEffect, useState } from "react";

export const useGetProducts = (id="") => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const manageApi = async () => {
		try {
			const response = await fetch(`https://fakestoreapi.com/products/${id}`)
				.then((response) => response.json())
				.then((result) => result);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const getProducts = async () => {
		try {
			const products = await manageApi();
			console.log(products);
			setProducts(products);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return { products, isLoading };
};
