import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React from "react";

export const PreviewGallery = () => {
	return (
		<Grid
			templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
			gap="1rem"
			backgroundColor="white"
			padding="1em"
			margin="2em"
		>
			<GridItem
				colSpan={2}
				height="20rem"
				backgroundImage="./clothes.jpg"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<Link to="/products">
					<Flex
						height="100%"
						justifyContent="center"
						placeItems="center"
						backgroundColor="rgba(0,0,0,0.5)"
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
							Clothes
						</Text>
					</Flex>
				</Link>
			</GridItem>
			<GridItem
				colSpan={{ base: 2, md: 1 }}
				height={{ base: "10em", md: "15em" }}
				backgroundImage="./technology.png"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<Link to="/products">
					<Flex
						height="100%"
						justifyContent="center"
						placeItems="center"
						backgroundColor="rgba(0,0,0,0.5)"
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
							Technology
						</Text>
					</Flex>
				</Link>
			</GridItem>
			<GridItem
				colSpan={{ base: 2, md: 1 }}
				height={{ base: "10em", md: "15em" }}
				backgroundImage="./jewellery.jpg"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<Link to="/products">
					<Flex
						height="100%"
						justifyContent="center"
						placeItems="center"
						backgroundColor="rgba(0,0,0,0.5)"
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
							Jewellery
						</Text>
					</Flex>
				</Link>
			</GridItem>
		</Grid>
	);
};
