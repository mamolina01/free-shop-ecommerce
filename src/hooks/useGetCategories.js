import { useEffect, useState } from "react";

export const useGetCategories = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [categories, setCategories] = useState([]);
	
	const manageApi = async () => {
		try {
			const response = await fetch(
				`https://fakestoreapi.com/products/categories`
			)
				.then((response) => response.json())
				.then((result) => result);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const getCategories = async () => {
		// setIsLoading(true)
			try {
				const categories = await manageApi();
				setCategories(categories);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
	};

	useEffect(() => {
		getCategories();
	}, []);

	return { categories, isLoading };
};
