import { Alert, AlertIcon, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FreeShopContext } from "../context";

export const AddedToCart = () => {
  const { showSuccess } = useContext(FreeShopContext);
  return (
    <>
      <Flex
        position="fixed"
        display={showSuccess ? "flex" : "none"}
        bottom="10"
        width="100%"
        zIndex="15"
        justify="center"
      >
        <Alert
          width="fit-content"
          status="success"
          color="blackAlpha.800"
          fontWeight="500"
          className="animate__animated animate__bounceIn animate__faster"
        >
          <AlertIcon />
          Added to cart!
        </Alert>
      </Flex>
    </>
  );
};
