import {
	Alert,
	AlertIcon,
	Button,
	Flex,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { ProductItem } from "./ProductItem";
import { useContext, useEffect, useState } from "react";
import { FreeShopContext } from "../../../context";
import { useGetProducts } from "../../../hooks";

export const ProductList = () => {
	const { products, filteredProducts, isLoading, addProduct } =
		useContext(FreeShopContext);
	const [showSuccess, setShowSuccess] = useState(false);

	useGetProducts();

	const getProducts = () => {
		if (filteredProducts.length <= 0) {
			return products;
		} else {
			return filteredProducts;
		}
	};

	const onHandleAddProduct = (item) => {
		addProduct(item);
		setShowSuccess(true);
		setTimeout(function () {
			setShowSuccess(false);
		}, 2000);
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
							gap={{ base: "1em", md: "2em" }}
						>
							{getProducts().map((product) => (
								<ProductItem
									key={product.id}
									product={product}
									addProduct={onHandleAddProduct}
								/>
							))}
						</Flex>
					</>
				)}
			</Flex>

			<Flex
				position="fixed"
				display={showSuccess ? "flex" : "none"}
				bottom="10"
				width="100%"
				zIndex="15"
				justify="center"
			>
				<Alert
					width="fit-content"
					status="success"
					color="blackAlpha.800"
					fontWeight="500"
					className="animate__animated animate__bounceIn animate__faster"
				>
					<AlertIcon />
					Added to cart!
				</Alert>
			</Flex>
		</>
	);
};
