import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const PreviewGalleryItem = ({ name }) => {
	return (
		<Link to={`/products`}>
			<Flex
				backgroundColor="rgba(0,0,0,0.5)"
				height="100%"
				justifyContent="center"
				placeItems="center"
				cursor="pointer"
				_hover={{
					backgroundColor: "rgba(0,0,0,0.7)",
					transition: "0.8s",
				}}
			>
				<Text
					color="white"
					fontWeight="600"
					fontSize="3xl"
					alignContent="center"
				>
					{name}
				</Text>
			</Flex>
		</Link>
	);
};
