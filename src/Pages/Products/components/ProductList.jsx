import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useGetProducts } from "../../../hooks/";
import { ProductItem } from "./ProductItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store";

export const ProductList = () => {
	const [page, setPage] = useState(1);
	// const { products, isLoading } = useGetProducts("", page);
	// const products=[]
	// const isLoading=true
	const { products, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<>
			<Flex flexDirection="column" width="80%">
				<Flex justify="center" padding="1em">
					<Text fontWeight="bold" fontSize="3xl">
						Products
					</Text>
				</Flex>
				{isLoading ? (
					<>
						<Flex justify="center" height="100vh">
							<Spinner />
						</Flex>
					</>
				) : (
					<Flex textAlign="center" justify="center" flexWrap="wrap" gap="2em">
						{products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</Flex>
				)}
				{/* <Flex justify="center" gap="2em">
					<Button
						display={page >= 3 ? "none" : ""}
						onClick={() => setPage(page + 1)}
						width="fit-content"
						backgroundColor="black"
						color="white"
						marginTop="1em"
						_hover={{
							backgroundColor:"blackAlpha.800"
						}}
					>
						Show More
					</Button>
					<Button
						display={page <= 1 ? "none" : ""}
						onClick={() => setPage(page -1)}
						width="fit-content"
						backgroundColor="black"
						color="white"
						marginTop="1em"
						_hover={{
							backgroundColor:"blackAlpha.800"
						}}
					>
						Show Less
					</Button>
				</Flex> */}
			</Flex>
		</>
	);
};
