import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { BsCreditCard2Back,BsFillStarFill } from "react-icons/bs";

export const ProductDetailItem = ({ product }) => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        backgroundColor="#EBD4D4"
        height="fit-content"
        padding="1em"
        marginTop="5em"
        gap="3em"
        _hover={{
          shadow: "2xl",
          transition: "1s",
        }}
      >
        <Flex backgroundColor="white" cursor="pointer">
          <Image
            src={product.image}
            alt={product.title}
            height="20em"
            objectFit="contain"
            width="20em"
          />
        </Flex>

        <Flex flexDirection="column" justify="space-between">
          <Flex flexDirection="column" maxWidth="20em">
            <Text fontWeight="bold" color="black" cursor="pointer">
              {product.title}
            </Text>
            <Flex  alignItems="center" color="black" gap="5px">
              <Text>{product.rating.rate}</Text>
              <BsFillStarFill/>
              <Text fontSize="sm" color="blackAlpha.700">{"("}{product.rating.count} reviews{")"}</Text>
            </Flex>
            <Text
              color="blackAlpha.700"
              // fontWeight="bold"
              fontSize="3xl"
            >
              ${product.price}
            </Text>
            <Flex gap="0.5em" alignItems="center">
              <BsCreditCard2Back  />
              <Text>12x {product.price / 12}</Text>
            </Flex>

            <Text>{product.description}</Text>
          </Flex>

          <Flex justify="center">
            <Button
              fontSize="sm"
              backgroundColor="transparent"
              border="1px solid black"
              _hover={{
                backgroundColor: "black",
                color: "white",
              }}
              // border="2px solid black"
            >
              <FaShoppingCart />
              Add to cart
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
