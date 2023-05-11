import { Flex, Spinner } from "@chakra-ui/react";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";

export const ProductsPage = () => {
	return (
		<>
			{/* {isLoading ? (
				<>
					<Flex justify="center" alignItems="center" height="90vh" width="100%">
						<Spinner />
					</Flex>
				</>
			) : ( */}
			<>
				<Flex
					justify="space-between"
					height={{ md: "100vh" }}
					flexDirection={{ base: "column", md: "row" }}
				>
					<ProductFilter />

					<ProductList />
				</Flex>
			</>
			{/* )} */}
		</>
	);
};
