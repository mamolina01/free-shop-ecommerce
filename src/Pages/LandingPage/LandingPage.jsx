import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { PreviewGallery } from "./components";

export const LandingPage = () => {
	return (
		<>
			<Box
				// backgroundColor="#FFF0F0"
				justifyContent="center"
			>
				<Flex
					marginTop="2em"
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
				</Flex>
                <PreviewGallery/>
			</Box>
		</>
	);
};
