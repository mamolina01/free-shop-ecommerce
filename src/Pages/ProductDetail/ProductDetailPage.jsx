import { Flex, Spinner, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProduct } from "../../hooks";
import { ProductDetails } from "./components/";

export const ProductDetailPage = () => {
	const { productId } = useParams();
	const { products: product, isLoading } = useGetSingleProduct(productId);

	return (
		<>
			{!!isLoading ? (
				<>
					<Flex
						justify="center"
						flexDirection="column"
						alignItems="center"
						width="100%"
						height="90vh"
					>
						<Spinner />
					</Flex>
				</>
			) : (
				<>
					<Flex justify="center">
						<Flex
							flexDirection="column"
							justify="center"
							gap="0.5em"
							margin="2em 0"
						>
							<Flex gap="0.5em" color="whiteAlpha.700">
								<Link to="/products">
									<Text cursor="pointer">Go Back</Text>
								</Link>
								<Text>|</Text>
								<Text color="white" fontWeight="bold" textTransform="uppercase">
									{product.category}
								</Text>
							</Flex>
							<ProductDetails product={product} />
						</Flex>
					</Flex>

				</>
			)}
		</>
	);
};
