import { Flex } from "@chakra-ui/react";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";

export const ProductsPage = () => {
  return (
    <>
      <>
        <Flex
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <ProductFilter />

          <ProductList />
        </Flex>
      </>
    </>
  );
};
