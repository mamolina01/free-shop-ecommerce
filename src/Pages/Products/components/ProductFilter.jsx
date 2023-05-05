import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const ProductFilter = () => {
	return (
		<>
			<Flex
				display={{ base: "none", md: "flex" }}
				flexDirection="column"
				justify="start"
				padding="1em"
			>
				<Box marginTop="6rem">
					<Text color="black" fontWeight="bold" fontSize="2xl">
						FILTER BY
					</Text>

					<Text
						color="blackAlpha.700"
						fontSize="xl"
						cursor="pointer"
						_hover={{ color: "black" }}
					>
						Category
					</Text>

					<Text
						color="blackAlpha.700"
						fontSize="xl"
						cursor="pointer"
						_hover={{ color: "black" }}
					>
						Price
					</Text>

					<Text
						color="blackAlpha.700"
						fontSize="xl"
						cursor="pointer"
						_hover={{ color: "black" }}
					>
						Rate
					</Text>
				</Box>
			</Flex>
		</>
	);
};
