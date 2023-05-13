import { Flex, Text } from "@chakra-ui/react";
export const AboutPage = () => {
	return (
		<>
			<Flex justify="center" padding="1em">
				<Text fontWeight="bold" fontSize="3xl">
					About Us
				</Text>
			</Flex>
			<Flex justify="center" margin="1em">
				<Flex
					backgroundColor="main"
					padding="1em"
					flexDirection={{ base: "column", md: "row" }}
				>
					<iframe
						title="mapa"
						src={`https://maps.google.com/?ll=40.675816,-73.984018&z=14&t=m&output=embed`}
						height="300"
						width="300"
						frameborder="0"
						style={{ border: 0 }}
						allowfullscreen
					></iframe>
					<Flex
						flexDirection="column"
						gap="1em"
						marginTop={{ base: "1em", md: "0" }}
						marginLeft={{ md: "1em" }}
						justifyContent="space-between"
					>
						<Flex flexDirection="column">
							<Flex flexDirection="column">
								<Text fontWeight="bold">Location</Text>
								<Text>441 Court Street Brooklyn, NY 14124</Text>
							</Flex>
							<Flex flexDirection="column">
								<Text fontWeight="bold">Hours of Operation</Text>
								<Text>We are open from 10 AM to 06 PM</Text>
							</Flex>
							<Flex flexDirection="column">
								<Text fontWeight="bold">Orders</Text>
								<Text>Order today, receive tomorrow!</Text>
							</Flex>
						</Flex>

						<Flex justify="center" fontSize="3xl" fontWeight="bold">
							<Text>Buy in freeShop!</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
