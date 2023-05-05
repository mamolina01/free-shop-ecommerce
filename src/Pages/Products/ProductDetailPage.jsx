import { Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProducts } from "../../hooks";
import { ProductDetailItem } from "./components";

export const ProductDetailPage = () => {
	const { productId } = useParams();
	const { products: product, isLoading } = useGetProducts(productId);

	return (
		<>
			<Flex justify="center" height="100vh" backgroundColor="#FFF0F0">
				{isLoading ? (
					<>
						<Flex justify="center">
							<Spinner />
						</Flex>
					</>
				) : (
					<ProductDetailItem product={product}/>
				)}
			</Flex>
		</>
	);
};
