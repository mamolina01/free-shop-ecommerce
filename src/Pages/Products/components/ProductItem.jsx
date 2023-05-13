import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { maxCharacters } from "../../../helpers";

export const ProductItem = ({ product, addProduct }) => {
	return (
		<>
			<Flex
				className="animate__animated animate__fadeIn animate__faster"
				flexDirection="column"
				alignItems="center"
				justify="space-between"
				backgroundColor="black"
				padding="0.5em"
				width={{ base: "12em", md: "15em" }}
				maxWidth={{ base: "10em", md: "15em" }}
				border="1px solid"
				borderColor="blackAlpha.100"
				gap="5px"
				_hover={{
					shadow: "md",
					transition: "0.3s",
				}}
			>
				<Flex
					flexDirection="column"
					width="100%"
					_hover={{ color: "main" }}
					fontSize={{ base: "sm", md: "md" }}
				>
					<Link to={`/products/${product.id}`}>
						<Flex backgroundColor="white" cursor="pointer">
							<Image
								src={product.image}
								alt={product.title}
								height={{ base: "8em", md: "12em" }}
								objectFit="contain"
								width="100%"
							/>
						</Flex>
					</Link>

					<Link to={`/products/${product.id}`}>
						<Text textAlign="center" fontWeight="bold" cursor="pointer">
							{maxCharacters(product.title, 40)}
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
				>
					<FaShoppingCart />
					Add to cart
				</Button>
			</Flex>
		</>
	);
};
