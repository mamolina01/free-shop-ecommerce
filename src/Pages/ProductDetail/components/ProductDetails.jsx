import { Flex, Image, Button, Text } from "@chakra-ui/react";
import { BsCreditCard2Back, BsFillStarFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { FreeShopContext } from "../../../context";

export const ProductDetails = ({ product }) => {
  const { onHandleAddProduct } = useContext(FreeShopContext);

  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        className="animate__animated animate__fadeIn animate__faster"
        backgroundColor="black"
        height="fit-content"
        padding="1em"
        gap="1em"
        _hover={{
          shadow: "xl",
          transition: "0.5s",
        }}
      >
        <Flex backgroundColor="white" alignItems="center" cursor="pointer">
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
            <Text fontWeight="bold" color="main" cursor="pointer">
              {product.title}
            </Text>
            <Flex alignItems="center" color="white" gap="5px">
              <Text>{product.rating.rate}</Text>
              <BsFillStarFill />
              <Text fontSize="sm" color="whiteAlpha.700">
                {"("}
                {product.rating.count} reviews{")"}
              </Text>
            </Flex>
            <Text color="white" fontSize="3xl">
              ${product.price}
            </Text>
            <Flex gap="0.5em" alignItems="center">
              <BsCreditCard2Back />
              <Text>12 x ${(product.price / 12).toFixed(2)}</Text>
            </Flex>

            <Text>{product.description}</Text>
          </Flex>

          <Flex justify="center" marginTop="1em">
            <Button
              fontSize="sm"
              backgroundColor="transparent"
              border="1px solid white"
              _hover={{
                backgroundColor: "main",
                color: "white",
              }}
              onClick={() => onHandleAddProduct(product)}
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
