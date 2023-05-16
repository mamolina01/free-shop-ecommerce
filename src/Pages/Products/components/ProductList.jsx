import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ProductItem } from "./ProductItem";
import { useContext, useEffect, useState } from "react";
import { FreeShopContext } from "../../../context";
import { useGetProducts } from "../../../hooks";
import { AddedToCart } from "../../../components/AddedToCart";

export const ProductList = () => {
  const { products, filteredProducts, isLoading, onHandleAddProduct } =
    useContext(FreeShopContext);

  useGetProducts();

  const getProducts = () => {
    if (filteredProducts.length <= 0) {
      return products;
    } else {
      return filteredProducts;
    }
  };

  return (
    <>
      <Flex flexDirection="column" margin="0 auto" marginBottom="1em">
        <Flex justify="center" padding="1em">
          <Text fontWeight="bold" fontSize="3xl">
            Products
          </Text>
        </Flex>

        {isLoading ? (
          <Flex justify="center" alignItems="center" height="90vh" width="100%">
            <Spinner />
          </Flex>
        ) : (
          <>
            <Flex
              textAlign="center"
              alignContent="center"
              justify="center"
              flexWrap="wrap"
              gap={{ base: "1em", md: "2em" }}
            >
              {getProducts().map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  addProduct={onHandleAddProduct}
                />
              ))}
              <AddedToCart />
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};
