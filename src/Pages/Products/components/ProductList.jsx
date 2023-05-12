import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { ProductItem } from "./ProductItem";
import { useContext, useEffect, useState } from "react";
import { FreeShopContext } from "../../../context";
import { useGetProducts } from "../../../hooks";

export const ProductList = () => {
	const { products, filteredProducts, isLoading } = useContext(FreeShopContext);

	useGetProducts();

	const getProducts = () => {
		if (filteredProducts.length <= 0) {
			return products;
		} else {
			return filteredProducts;
		}
	};
	

	return (
		<>
			<Flex flexDirection="column" margin="0 auto">
				<Flex justify="center" padding="1em">
					<Text fontWeight="bold" fontSize="3xl">
						Products
					</Text>
				</Flex>

				{isLoading ? (
					<Flex justify="center" alignItems="center" height="90vh" width="100%">
						<Spinner />
					</Flex>
				) : (
					<>
						<Flex
							textAlign="center"
							alignContent="center"
							justify="center"
							flexWrap="wrap"
							gap="2em"
						>
							{getProducts().map((product) => (
								<ProductItem key={product.id} product={product} />
							))}
						</Flex>
					</>
				)}
			</Flex>
		</>
	);
};
