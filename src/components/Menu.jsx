import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import { BsArrowLeft } from "react-icons/bs";
export const Menu = ({ showMenu, setShowMenu }) => {
  const [showCartOnMenu, setShowCartOnMenu] = useState(false);
  return (
    <>
      <Flex
        display={{ base: showMenu ? "flex" : "none", md: "none" }}
        position="absolute"
        backgroundColor="#222222"
        height="100%"
        width="80%"
        right="0"
        zIndex="5"
        flexDirection="column"
      >
        <Flex justifyContent="end" margin="0.5em">
          <Text
            display={showCartOnMenu ? "none" : "flex"}
            backgroundColor="transparent"
            fontSize="3xl"
            onClick={() => setShowMenu(false)}
          >
            X
          </Text>
          <Flex display={showCartOnMenu ? "flex" : "none"}>
            <BsArrowLeft
              size="1.5em"
              onClick={() => setShowCartOnMenu(false)}
            />
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          width="90%"
          display={showCartOnMenu ? "none" : "flex"}
        >
          <Link to="/products">
            <Flex
              borderBottom="1px solid"
              padding="0.2em"
              marginLeft="1em"
              borderColor="whiteAlpha.400"
              onClick={() => setShowMenu(false)}
            >
              <Text fontSize="2xl">Products</Text>
            </Flex>
          </Link>
          <Link>
            <Flex
              borderBottom="1px solid"
              padding="0.2em"
              marginLeft="1em"
              borderColor="whiteAlpha.400"
              onClick={() => setShowMenu(false)}
            >
              <Text fontSize="2xl">About</Text>
            </Flex>
          </Link>

          <Flex
            borderBottom="1px solid"
            padding="0.2em"
            marginLeft="1em"
            borderColor="whiteAlpha.400"
            onClick={() => {
              `${setShowCartOnMenu(true)}`;
            }}
          >
            <Text fontSize="2xl">Shopping Cart</Text>
          </Flex>
        </Flex>

        <Flex
          placeItems="center"
          alignSelf="center"
          flexDirection="column"
          display={showCartOnMenu ? "flex" : "none"}
        >
          <ShoppingCart />
        </Flex>
      </Flex>
    </>
  );
};
