import { Flex } from "@chakra-ui/react";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";

export const ProductsPage = () => {
	return (
		<>
			<Flex justify="space-evenly" backgroundColor="#FFF0F0">
				<ProductFilter />
				<ProductList />
			</Flex>
		</>
	);
};
