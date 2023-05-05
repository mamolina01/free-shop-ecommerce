import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { PreviewGallery } from "./components";
import { Link } from "react-router-dom";


export const LandingPage = () => {
	return (
		<>
			<Box
				justifyContent="center"
				margin="2rem"
			>
				<Flex
					padding="1em"
					justify={{ md: "center" }}
					flexDirection={{ base: "column", md: "row" }}
				>
					<Text
						color="black"
						fontFamily="serif"
						fontWeight="bold"
						fontSize="60px"
					>
						Buy Now,
					</Text>
					<Text
						marginLeft="1em"
						color="black"
						fontFamily="serif"
						fontWeight="bold"
						fontSize="60px"
					>
						Buy Fast.
					</Text>
				</Flex>
				<Flex justify="center">
					<Text color="black" textAlign="center" fontFamily="serif" fontSize="35px">
						Leave fashion in our hands.
					</Text>
				</Flex>
				<Flex
					width="100%"
					justify="center"
					margin="5em 0"
				>
					<Link to="/products">
					<Button
						backgroundColor="transparent"
						border="2px solid black"
						color="black"
						_hover={{
							color: "#835858",
							borderColor: "#835858",
						}}
					>
						Products
					</Button>
					</Link>
					
				</Flex>
                <PreviewGallery/>
			</Box>
		</>
	);
};
