import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useGetCategories } from "../../../hooks";
import { BsFillStarFill } from "react-icons/bs";

const prices = [10, 50, 100, 200];
const rates = [2, 3, 4, 5];
export const ProductFilterOptions = ({
	filter,
	setFilter,
	filterBy,
	onHandleFilterBy,
}) => {
	const { categories } = useGetCategories(filter);

	return (
		<>
			<Text
				color={filterBy === "category" ? "white" : "whiteAlpha.800"}
				fontSize="xl"
				cursor="pointer"
				width="7em"
				_click={{ color: "white" }}
				_hover={{ color: "white" }}
				onClick={(e) => onHandleFilterBy(e)}
			>
				Category
			</Text>

			<Box
				display={filterBy === "category" ? "" : "none"}
				color="blackAlpha.700"
			>
				{categories.map((category) => (
					<Text
						key={category}
						// marginLeft="0.5em"
						marginLeft={filter === category ? "1em" : "0.5"}
						cursor="pointer"
						textTransform="capitalize"
						color={filter === category ? "white" : "whiteAlpha.800"}
						onClick={() => setFilter(category)}
						_hover={{ color: "white" }}
					>
						{category}
					</Text>
				))}
				<Divider borderColor="whiteAlpha.500" marginTop="0.5em" />
			</Box>

			<Text
				color={filterBy === "price" ? "white" : "whiteAlpha.800"}
				fontSize="xl"
				cursor="pointer"
				_hover={{ color: "white" }}
				onClick={(e) => onHandleFilterBy(e)}
			>
				Price
			</Text>

			<Box display={filterBy === "price" ? "" : "none"}>
				{prices.map((price) => (
					<Text
						color={filter === price ? "white" : "whiteAlpha.800"}
						key={price}
						marginLeft={filter === price ? "1em" : "0.5"}
						cursor="pointer"
						_hover={{ color: "white" }}
						onClick={() => setFilter(price)}
					>
						$0 to ${price}
					</Text>
				))}
				<Divider borderColor="whiteAlpha.500" marginTop="0.5em" />
			</Box>

			<Text
				color={filterBy === "rate" ? "white" : "whiteAlpha.800"}
				fontSize="xl"
				cursor="pointer"
				_hover={{ color: "white" }}
				onClick={(e) => onHandleFilterBy(e)}
			>
				Rate
			</Text>

			<Box display={filterBy === "rate" ? "" : "none"}>
				{rates.map((rate) => (
					<Flex
						key={rate}
						alignItems="center"
						color={filter === rate ? "white" : "whiteAlpha.800"}
						marginLeft={filter === rate ? "1em" : "0.5"}
						_hover={{ color: "white" }}
						onClick={() => setFilter(rate)}
						cursor="pointer"
					>
						<BsFillStarFill fontSize="0.9em" />

						<Text marginLeft="0.5em">0 to {rate}</Text>
					</Flex>
				))}
				<Divider borderColor="whiteAlpha.500" marginTop="0.5em" />
			</Box>
			<Flex display={filter !== "" ? "flex" : "none"} borderRadius="0.2em">
				<Text
					textDecoration="underline"
					color="whiteAlpha.800"
					cursor="pointer"
					_hover={{ color: "white" }}
					onClick={() => onHandleFilterBy("")}
				>
					Clear Filters
				</Text>
			</Flex>
		</>
	);
};
