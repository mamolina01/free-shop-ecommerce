import { Flex } from "@chakra-ui/react";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";
import { useState } from "react";

export const ProductsPage = () => {
	const [filter, setFilter] = useState("");

	return (
		<>
			<Flex justify="space-evenly" backgroundColor="#FFF0F0">
				<ProductFilter filter={filter} setFilter={setFilter} />
				<ProductList />
			</Flex>
		</>
	);
};
