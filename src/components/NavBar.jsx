import { Flex, Box, Text, Image, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../store/slices/products/productsSlice";

export const NavBar = () => {
	const [showCart, setShowCart] = useState(false);
	const { shoppingCart } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const maxCharacters = (value) => {
		if (value.length > 20) {
			let newValue = value.slice(0, 22) + "...";
			return newValue;
		} else {
			return value;
		}
	};

	return (
		<>
			<Flex
				alignContent="center"
				justify="space-between"
				width="100%"
				padding="0.5em 1em"
				shadow="md"
				backgroundColor="#EBD4D4"
				color="#835858"
			>
				<Link to="/">
					<Text
						fontSize="3xl"
						fontWeight="bold"
						cursor="pointer"
						_hover={{ color: "#463333" }}
					>
						freeShop
					</Text>
				</Link>

				<Flex
					gap="15px"
					alignContent="center"
					justify="space-between"
					placeItems="center"
					display={{ base: "none", md: "flex" }}
				>
					<Link to="/products">
						<Text
							fontSize="xl"
							fontWeight="600"
							cursor="pointer"
							_hover={{ color: "#463333" }}
						>
							Products
						</Text>
					</Link>

					<Text
						fontSize="xl"
						fontWeight="600"
						cursor="pointer"
						_hover={{ color: "#463333" }}
					>
						About
					</Text>

					<Flex
						padding="2px 10px"
						backgroundColor="#835858"
						color="#EBD4D4"
						borderRadius="5px"
						cursor="pointer"
						_hover={{ backgroundColor: "#463333" }}
						onClick={() => setShowCart(!showCart)}
					>
						<Text>{shoppingCart.length}</Text>
						<FaShoppingCart size="1.5em" />
					</Flex>
				</Flex>

				<Flex display={{ base: "block", md: "none" }}>
					<BsList color="#835858" size="35px" _hover={{ color: "#463333" }} />
				</Flex>
			</Flex>
			<Flex
				display={showCart ? "flex" : "none"}
				flexDirection="column"
				position="absolute"
				backgroundColor="white"
				shadow="xl"
				right="1em"
				zIndex="4"
				maxWidth="20em"
				maxHeight="280px"
				overflowY="scroll"
			>
				{shoppingCart.map((item) => (
					<Flex
						padding="1em"
						borderBottom="1px solid #EEEEEE"
						gap="1em"
						fontSize="sm"
						color="blackAlpha.800"
						key={`navbar ${item.title}`}
					>
						<Image
							src={item.image}
							alt={item.title}
							objectFit="contain"
							height="4em"
							width="4em"
						/>
						<Flex flexDirection="column">
							<Text>{maxCharacters(item.title)}</Text>
							<Text color="black" fontWeight="bold">
								${item.price}
							</Text>
							<Text
								textDecoration="underline"
								cursor="pointer"
								onClick={() => dispatch(removeFromCart(item))}
							>
								Eliminar
							</Text>
						</Flex>
					</Flex>
				))}
			</Flex>
		</>
	);
};
