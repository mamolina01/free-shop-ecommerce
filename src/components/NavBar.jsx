import { Flex, Text } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

export const NavBar = () => {
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
				</Flex>
				<Flex display={{ base: "block", md: "none" }}>
					<BsList color="#835858" size="35px" _hover={{ color: "#463333" }} />
				</Flex>
			</Flex>
		</>
	);
};
