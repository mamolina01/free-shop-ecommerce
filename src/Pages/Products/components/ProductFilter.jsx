import { useState } from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import {
	useFilterProducts,
	useGetCategories,
	useGetProducts,
} from "../../../hooks";
import { BsFillStarFill } from "react-icons/bs";

export const ProductFilter = ({ filter, setFilter }) => {
	// console.log(`filter ${filter}`);
	const { products, isLoading: loading2 } = useGetProducts("");
	const { categories, isLoading } = useGetCategories(filter);
	const [activeFilter, setActiveFilter] = useState("");
	useFilterProducts(products, filter, activeFilter);
	// console.log(categories);

	const onHandleActiveFilter = (filterParam) => {
		filterParam = filterParam.target.textContent.toLowerCase();
		if (filterParam === activeFilter) {
			setActiveFilter("");
		} else {
			setActiveFilter(filterParam);
		}
	};

	const prices = [10, 50, 100, 200];
	const rates = [1, 2, 3, 4, 5];
	return (
		<>
			<Flex
				display={{ base: "none", md: "flex" }}
				flexDirection="column"
				justify="start"
			>
				<Box marginTop="6em">
					<Text color="black" fontWeight="bold">
						FILTER BY
					</Text>

					<Text
						color={activeFilter === "category" ? "black" : "blackAlpha.700"}
						fontSize="xl"
						cursor="pointer"
						_hover={{ color: "black" }}
						onClick={(e) => onHandleActiveFilter(e)}
					>
						Category
					</Text>

					<Box
						display={activeFilter === "category" ? "" : "none"}
						color="blackAlpha.700"
					>
						{categories.map((category) => (
							<Text
								key={category}
								marginLeft="0.5em"
								cursor="pointer"
								textTransform="capitalize"
								// fontSize="sm"
								onClick={(e) => setFilter(e.target.textContent)}
								_hover={{ color: "black" }}
							>
								{category}
							</Text>
						))}
						<Divider borderColor="blackAlpha.500" marginTop="0.5em" />
					</Box>

					<Text
						color={activeFilter === "price" ? "black" : "blackAlpha.700"}
						fontSize="xl"
						cursor="pointer"
						_hover={{ color: "black" }}
						onClick={(e) => onHandleActiveFilter(e)}
					>
						Price
					</Text>

					<Box
						display={activeFilter === "price" ? "" : "none"}
						color="blackAlpha.700"
					>
						{prices.map((price) => (
							<Text
								key={price}
								marginLeft="0.5em"
								cursor="pointer"
								_hover={{ color: "black" }}
								onClick={() => setFilter(price)}
							>
								$0 to ${price}
							</Text>
						))}
						<Divider borderColor="blackAlpha.500" marginTop="0.5em" />
					</Box>

					<Text
						color={activeFilter === "rate" ? "black" : "blackAlpha.700"}
						fontSize="xl"
						cursor="pointer"
						_hover={{ color: "black" }}
						onClick={(e) => onHandleActiveFilter(e)}
					>
						Rate
					</Text>

					<Box
						display={activeFilter === "rate" ? "" : "none"}
						color="blackAlpha.700"
					>
						{rates.map((rate, index) => (
							<>
								<Flex
									key={index * 4891}
									alignItems="center"
									_hover={{ color: "black" }}
									marginLeft="0.5em"
								>
									<BsFillStarFill fontSize="0.9em" />

									<Text
										marginLeft="0.5em"
										cursor="pointer"
										onClick={() => setFilter(rate)}
									>
										0 to {rate}
									</Text>
								</Flex>
							</>
						))}
						<Divider borderColor="blackAlpha.500" marginTop="0.5em" />
					</Box>
				</Box>
			</Flex>
		</>
	);
};
