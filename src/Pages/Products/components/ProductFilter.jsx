import { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { ProductFilterOptions } from "./ProductFilterOptions";
import { useFilterProducts } from "../../../hooks";

export const ProductFilter = () => {
	const [filterBy, setFilterBy] = useState("");
	const [filterItem, setFilterItem] = useState("");
	const [showFilter, setShowFilter] = useState(false);

	useFilterProducts(filterItem, filterBy);

	const onHandleFilterBy = (filterParam) => {
		if (filterParam === "") {
			setFilterBy("");
			setFilterItem("");
			return;
		}
		filterParam = filterParam.target.textContent.toLowerCase();
		if (filterParam === filterBy) {
			setFilterBy("");
		} else {
			setFilterBy(filterParam);
		}
	};

	return (
		<>
			<Flex
				display={{ base: "none", md: "flex" }}
				flexDirection="column"
				justify="start"
				marginLeft="1em"
			>
				<Box marginTop="6em">
					<Text fontWeight="bold">FILTER BY</Text>

					<ProductFilterOptions
						filter={filterItem}
						setFilter={setFilterItem}
						filterBy={filterBy}
						onHandleFilterBy={onHandleFilterBy}
						setShowFilter={setShowFilter}
					/>
				</Box>
			</Flex>

			<Flex
				display={{ base: "flex", md: "none" }}
				justify="space-between"
				padding="1em"
				backgroundColor="main"
				color="white"
				fontWeight="bold"
				zIndex="3"
			>
				<Flex>
					<Text>All Products</Text>
				</Flex>
				<Flex
					alignItems="center"
					gap="0.5em"
					cursor="pointer"
					onClick={() => setShowFilter(!showFilter)}
				>
					<Text>Filter</Text>
					<BsChevronDown />
				</Flex>
				<Flex
					position="absolute"
					borderTop="1px solid"
					borderColor="whiteAlpha.500"
					zIndex="10"
					shadow="xl"
					marginTop="2em"
					backgroundColor="main"
					display={{ base: showFilter ? "flex" : "none", md: "none" }}
					flexDirection="column"
					fontWeight="500"
					width="100%"
					right="0"
					padding="0.2em"
					paddingLeft="1em"
					className="animate__animated animate__fadeInRightBig animate__faster"
				>
					<ProductFilterOptions
						filter={filterItem}
						setFilter={setFilterItem}
						filterBy={filterBy}
						onHandleFilterBy={onHandleFilterBy}
						setShowFilter={setShowFilter}
					/>
				</Flex>
			</Flex>

			<Flex
				display={{ base: showFilter ? "" : "none", md: "none" }}
				onClick={() => setShowFilter(!showFilter)}
				backgroundColor="rgba(0,0,0,0.5)"
				position="absolute"
				width="100%"
				height="100%"
				zIndex="2"
			></Flex>
		</>
	);
};
