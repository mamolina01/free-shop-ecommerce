import { Flex, Text } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";

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
			>
				<Text color="#835858" fontSize="3xl" fontWeight="bold" cursor="pointer" _hover={{color:"#463333"}}>
					freeShop
				</Text>

				<Flex
					gap="15px"
					alignContent="center"
					justify="space-between"
					display={{ base: "none", md: "flex" }}
				>
					<Text color="#835858" fontSize="xl" fontWeight="600" cursor="pointer" _hover={{color:"#463333"}}>
						Products
					</Text>
					<Text color="#835858" fontSize="xl" fontWeight="600" cursor="pointer" _hover={{color:"#463333"}}>
						About
					</Text>
				</Flex>
				<Flex display={{ base: "block", md: "none" }}>
					<BsList color="#835858" size="35px" _hover={{color:"#463333"}} />
				</Flex>
			</Flex>
		</>
	);
};
