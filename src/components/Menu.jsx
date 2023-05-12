import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";

export const Menu = ({ showMenu, setShowMenu, setShowCart }) => {
	return (
		<>
			<Flex
				display={showMenu ? "flex" : "none"}
				position="absolute"
				backgroundColor="#222222"
				height="100%"
				width="80%"
				right="0"
				zIndex="5"
				flexDirection="column"
			>
				<Flex
					justifyContent="end"
					margin="0.5em"
					onClick={() => setShowMenu(false)}
				>
					<Text backgroundColor="transparent" fontSize="3xl">
						X
					</Text>
				</Flex>

				<Flex flexDirection="column" width="90%">
					<Link to="/products">
						<Flex
							borderBottom="1px solid"
							padding="0.2em"
							marginLeft="1em"
							borderColor="whiteAlpha.400"
						>
							<Text fontSize="2xl">Products</Text>
						</Flex>
					</Link>
					<Link>
						<Flex
							borderBottom="1px solid"
							padding="0.2em"
							marginLeft="1em"
							borderColor="whiteAlpha.400"
						>
							<Text fontSize="2xl">About</Text>
						</Flex>
					</Link>

					<Flex
						borderBottom="1px solid"
						padding="0.2em"
						marginLeft="1em"
						borderColor="whiteAlpha.400"
						onClick={() => {
							`${(setShowCart(true), setShowMenu(false))}`;
						}}
					>
						<Text fontSize="2xl">Shopping Cart</Text>
					</Flex>
				</Flex>
			</Flex>

				<ShoppingCart />
		</>
	);
};
