import { Button, Flex, Text } from "@chakra-ui/react";
import { PreviewGallery } from "./components";
import { Link } from "react-router-dom";

export const LandingPage = () => {
	return (
		<>
			<Flex
				backgroundImage="./compras.jpg"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<Flex
					height="100%"
					width="100%"
					backgroundColor="rgba(0,0,0,0.7)"
					flexDirection="column"
				>
					<Flex
						gap={{ base: "0", md: "2em" }}
						justify={{ md: "center" }}
						alignItems="center"
						flexDirection={{ base: "column", md: "row" }}
					>
						<Text fontFamily="serif" fontWeight="bold" fontSize="60px">
							Buy Now,
						</Text>
						<Text fontFamily="serif" fontWeight="bold" fontSize="60px">
							Buy Fast.
						</Text>
					</Flex>
					<Flex justify="center">
						<Text textAlign="center" fontFamily="serif" fontSize="35px">
							Leave fashion in our hands.
						</Text>
					</Flex>
					<Flex width="100%" justify="center" margin="5em 0">
						<Link to="/products">
							<Button
								backgroundColor="transparent"
								border="2px solid white"
								_hover={{
									backgroundColor: "rgba(0,0,0,0.7)",
								}}
								_active={{
									backgroundColor: "rgba(0,0,0,0.7)",
								}}
							>
								Products
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Flex>

			<PreviewGallery />
		</>
	);
};
