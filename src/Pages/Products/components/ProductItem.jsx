import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ product }) => {
  return (
    <>
      <Flex
        className="animate__animated animate__fadeIn animate__faster"
        flexDirection="column"
        alignItems="center"
        justify="space-between"
        backgroundColor="#EBD4D4"
        padding="0.5em"
        width="15em"
        maxWidth="15em"
        border="1px solid"
        borderColor="blackAlpha.100"
        gap="5px"
        _hover={{
          shadow: "md",
          transition: "0.3s",
        }}
      >
        <Flex flexDirection="column" width="100%">
          <Link to={`/products/${product.id}`}>
            <Flex backgroundColor="white" cursor="pointer">
              <Image
                src={product.image}
                alt={product.title}
                height="12em"
                objectFit="contain"
                width="100%"
              />
            </Flex>
          </Link>

          <Link to={`/products/${product.id}`}>
            <Text
              textAlign="center"
              fontWeight="bold"
              color="black"
              cursor="pointer"
            >
              {product.title}
            </Text>
          </Link>

          <Text textAlign="center" color="black">
            ${product.price}
          </Text>
        </Flex>

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
    </>
  );
};
