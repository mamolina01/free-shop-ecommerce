import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { ProductItem } from "./ProductItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store";

export const ProductList = ({ products, filteredProducts }) => {
  const [page, setPage] = useState(1);

  

  return (
    <>
      <Flex
        flexDirection="column"
        margin="0 auto"
      >
        <Flex justify="center" padding="1em">
          <Text fontWeight="bold" fontSize="3xl">
            Products
          </Text>
        </Flex>

        <Flex
          textAlign="center"
          alignContent="center"
          justify="center"
          flexWrap="wrap"
          gap="2em"
        >
          {filteredProducts.length <= 0
            ? products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            : filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </Flex>
      </Flex>
    </>
  );
};
