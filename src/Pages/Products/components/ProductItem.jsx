import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FreeShopContext } from "../../../context";
import { useContext } from "react";

export const ProductItem = ({ product }) => {
	const { addProduct } = useContext(FreeShopContext);

	return (
		<>
			<Flex
				className="animate__animated animate__fadeIn animate__faster"
				flexDirection="column"
				alignItems="center"
				justify="space-between"
				backgroundColor="black"
				padding="0.5em"
				width="15em"
				maxWidth="15em"
				border="1px solid"
				borderColor="blackAlpha.100"
				gap="5px"
				_hover={{
					shadow: "md",
					transition: "0.3s",
				}}
			>
				<Flex flexDirection="column" width="100%" _hover={{ color: "main" }}>
					<Link to={`/products/${product.id}`}>
						<Flex backgroundColor="white" cursor="pointer">
							<Image
								src={product.image}
								alt={product.title}
								height="12em"
								objectFit="contain"
								width="100%"
							/>
						</Flex>
					</Link>

					<Link to={`/products/${product.id}`}>
						<Text textAlign="center" fontWeight="bold" cursor="pointer">
							{product.title}
						</Text>
					</Link>

					<Text textAlign="center" color="white">
						${product.price}
					</Text>
				</Flex>

				<Button
					fontSize="sm"
					backgroundColor="transparent"
					border="1px solid white"
					_hover={{
						backgroundColor: "main",
					}}
					onClick={() => addProduct(product)}
					// border="2px solid black"
				>
					<FaShoppingCart />
					Add to cart
				</Button>
			</Flex>
		</>
	);
};
