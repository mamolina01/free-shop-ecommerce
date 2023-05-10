import { Flex, Spinner } from "@chakra-ui/react";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store";

export const ProductsPage = () => {
  const { products, filteredProducts,isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

//   const isLoading=true
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
            justify="space-between"
            height={{ md: "100vh" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <ProductFilter />

            <ProductList
              products={products}
              filteredProducts={filteredProducts}
            />
          </Flex>
        </>
      )}
    </>
  );
};
