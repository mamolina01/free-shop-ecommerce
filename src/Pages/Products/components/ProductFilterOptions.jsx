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
  setShowFilter,
}) => {
  const { categories } = useGetCategories(filter);

  const handleSetFilter = (value) => {
    setShowFilter(false);
    if (value === "") {
      setFilter("");
      onHandleFilterBy("");
      return;
    }
    const data = {
      item: value,
      type: filterBy,
    };
    setFilter(data);
  };

  return (
    <>
      <Text
        color={
          filter.type === "category"
            ? "black"
            : filterBy === "category"
            ? "black"
            : "blackAlpha.700"
        }
        fontSize="xl"
        cursor="pointer"
        width="7em"
        _click={{ color: "black" }}
        _hover={{ color: "black" }}
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
            marginLeft="0.5em"
            cursor="pointer"
            textTransform="capitalize"
            color={filter.item === category ? "black" : "blackAlpha.700"}
            onClick={() => handleSetFilter(category)}
            _hover={{ color: "black" }}
          >
            {category}
          </Text>
        ))}
        <Divider borderColor="blackAlpha.500" marginTop="0.5em" />
      </Box>

      <Text
        color={
          filter.type === "price"
            ? "black"
            : filterBy === "price"
            ? "black"
            : "blackAlpha.700"
        }
        fontSize="xl"
        cursor="pointer"
        _hover={{ color: "black" }}
        onClick={(e) => onHandleFilterBy(e)}
      >
        Price
      </Text>

      <Box display={filterBy === "price" ? "" : "none"}>
        {prices.map((price) => (
          <Text
            color={filter.item === price ? "black" : "blackAlpha.700"}
            key={price}
            marginLeft="0.5em"
            cursor="pointer"
            _hover={{ color: "black" }}
            onClick={() => handleSetFilter(price)}
          >
            $0 to ${price}
          </Text>
        ))}
        <Divider borderColor="blackAlpha.500" marginTop="0.5em" />
      </Box>

      <Text
        color={
          filter.type === "rate"
            ? "black"
            : filterBy === "rate"
            ? "black"
            : "blackAlpha.700"
        }
        fontSize="xl"
        cursor="pointer"
        _hover={{ color: "black" }}
        onClick={(e) => onHandleFilterBy(e)}
      >
        Rate
      </Text>

      <Box display={filterBy === "rate" ? "" : "none"}>
        {rates.map((rate) => (
          <Flex
            key={rate}
            alignItems="center"
            color={filter.item === rate ? "black" : "blackAlpha.700"}
            _hover={{ color: "black" }}
            marginLeft="0.5em"
            onClick={() => handleSetFilter(rate)}
            cursor="pointer"
          >
            <BsFillStarFill fontSize="0.9em" />

            <Text marginLeft="0.5em">0 to {rate}</Text>
          </Flex>
        ))}
        <Divider borderColor="blackAlpha.500" marginTop="0.5em" />
      </Box>
      <Flex display={filter !== "" ? "flex" : "none"} borderRadius="0.2em">
        <Text
          textDecoration="underline"
          color="blackAlpha.700"
          cursor="pointer"
          _hover={{ color: "black" }}
          onClick={() => handleSetFilter("")}
        >
          Clear Filters
        </Text>
      </Flex>
    </>
  );
};
