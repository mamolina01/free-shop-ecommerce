import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useGetProducts } from "../../../hooks/";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
	const { products, isLoading } = useGetProducts();

	return (
		<>
			<Flex flexDirection="column" width="100%">
				<Flex justify="center" padding="1em">
					<Text fontWeight="bold" fontSize="3xl">
						Products
					</Text>
				</Flex>
				{isLoading ? (
					<>
						<Flex justify="center">
							<Spinner />
						</Flex>
					</>
				) : (
					<Flex
						padding="1em"
						textAlign="center"
						justify="center"
						flexWrap="wrap"
						gap="2em"
					>
						{products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</Flex>
				)}
			</Flex>
		</>
	);
};
