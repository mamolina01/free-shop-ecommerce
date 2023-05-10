import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { ProductDetailItem } from "./components";

import { useGetProducts } from "../../hooks";

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const { products: product, isLoading } = useGetProducts(productId);

  return (
    <>
      <Flex justify="center" >
        {!!isLoading ? (
          <>
            <Flex justify="center" flexDirection="column" height="90vh">
              <Spinner />
            </Flex>
          </>
        ) : (
          <ProductDetailItem product={product} />
        )}
      </Flex>
    </>
  );
};
