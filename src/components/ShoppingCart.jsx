import React, { useContext } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { FreeShopContext } from "../context";
import { HiShoppingBag } from "react-icons/hi";

export const ShoppingCart = ({ showCart, setShowCart }) => {
	const { shoppingCart, removeProduct } = useContext(FreeShopContext);
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
				display={showCart ? "flex" : "none"}
				flexDirection="column"
				position="absolute"
				backgroundColor="white"
				shadow="3xl"
				right="1em"
				zIndex="4"
				width="20em"
				maxWidth="20em"
				maxHeight="280px"
				overflowY="auto"
				color="black"
				border="1px solid"
				borderColor="blackAlpha.800"
			>
				<Flex borderBottom="1px solid #EEEEEE" >
					<Text marginLeft="1em" fontWeight="500">
						Shopping Cart
					</Text>
				</Flex>
				{shoppingCart == 0 ? (
					<>
						<Flex placeItems="center" alignSelf="center">
							<HiShoppingBag color="blackAlpha.900" />
							<Text color="blackAlpha.700" textAlign="center" padding="1em">
								Your Shopping Cart is empty
							</Text>
						</Flex>
					</>
				) : (
					shoppingCart.map((item) => (
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
								<Flex gap="0.5em">
									<Text color="black" fontWeight="bold">
										${item.price}
									</Text>
									<Text>{item.amount}u.</Text>
								</Flex>

								<Text
									textDecoration="underline"
									cursor="pointer"
									onClick={() => removeProduct(item)}
								>
									Eliminar
								</Text>
							</Flex>
						</Flex>
					))
				)}
			</Flex>
		</>
	);
};
