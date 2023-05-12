import React, { useContext } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { FreeShopContext } from "../context";
import { HiShoppingBag } from "react-icons/hi";

export const ShoppingCart = () => {
  const { shoppingCart, removeProduct } = useContext(FreeShopContext);
  const maxCharacters = (value) => {
    if (value.length > 20) {
      let newValue = value.slice(0, 22) + "...";
      return newValue;
    } else {
      return value;
    }
  };

  return (
    <>

      <Flex borderBottom="1px solid #EEEEEE" width="100%">
        <Text marginLeft="1em" fontWeight="500">
          Shopping Cart
        </Text>
      </Flex>
      {shoppingCart == 0 ? (
        <>
          <Flex
            placeItems="center"
            alignSelf="center"
            flexDirection={{ base: "column", md: "row" }}
            padding="1em"
          >
            <HiShoppingBag size="5em" />
            <Text textAlign="center">Your Shopping Cart is empty</Text>
          </Flex>
        </>
      ) : (
        shoppingCart.map((item) => (
          <Flex
            padding="1em"
            borderBottom="1px solid #EEEEEE"
            gap="1em"
            width="100%"
            fontSize="sm"
            // color="blackAlpha.800"
            key={`navbar ${item.title}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              objectFit="contain"
              height="4em"
              width="4em"
            />
            <Flex flexDirection="column">
              <Text>{maxCharacters(item.title)}</Text>
              <Flex gap="0.5em">
                <Text 
                // color="black"
                 fontWeight="bold">
                  ${item.price}
                </Text>
                <Text>{item.amount}u.</Text>
              </Flex>

              <Text
                textDecoration="underline"
                cursor="pointer"
                onClick={() => removeProduct(item)}
              >
                Eliminar
              </Text>
            </Flex>
          </Flex>
        ))
      )}
    </>
  );
};
