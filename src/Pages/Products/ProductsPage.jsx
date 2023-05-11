import { Flex, Spinner } from "@chakra-ui/react";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";
import { useContext, useEffect, useState } from "react";
import { FreeShopContext } from "../../context";
import { useGetProducts } from "../../hooks";

export const ProductsPage = () => {
  const { products, filteredProducts, shoppingCart, isLoading } =
    useContext(FreeShopContext);

  useGetProducts();
  return (
    <>
      {isLoading ? (
        <>
          <Flex justify="center" alignItems="center" height="90vh" width="100%">
            <Spinner />
          </Flex>
        </>
      ) : (
        <>
          <Flex
            // justify="space-between"
            height={{ md: "100vh" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <ProductFilter />

            <ProductList
              products={products}
              filteredProducts={filteredProducts}
              shoppingCart={shoppingCart}
            />
          </Flex>
        </>
      )}
    </>
  );
};
