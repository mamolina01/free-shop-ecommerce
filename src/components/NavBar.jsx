import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsList } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FreeShopContext } from "../context";
import { ShoppingCart } from "./ShoppingCart";
import { Menu } from "./Menu";

export const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { shoppingCart } = useContext(FreeShopContext);

  return (
    <>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Flex
        alignContent="center"
        justify="space-between"
        width="100%"
        padding="0.5em 1em"
        shadow="md"
        backgroundColor="black"
        color="white"
      >
        <Link to="/">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ color: "main" }}
          >
            freeShop
          </Text>
        </Link>

        <Flex
          gap="15px"
          alignContent="center"
          justify="space-between"
          placeItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link to="/products">
            <Text
              fontSize="xl"
              fontWeight="600"
              cursor="pointer"
              _hover={{ color: "main" }}
            >
              Products
            </Text>
          </Link>

          <Link to="/aboutus">
            <Text
              fontSize="xl"
              fontWeight="600"
              cursor="pointer"
              _hover={{ color: "main" }}
            >
              About
            </Text>
          </Link>

          <Flex
            padding="2px 10px"
            border=" 1px solid white"
            color="white"
            borderRadius="5px"
            cursor="pointer"
            placeItems="center"
            gap="0.2em"
            _hover={{ color: "main", borderColor: "main" }}
            onClick={() => setShowCart(!showCart)}
          >
            <Text>{shoppingCart.length}</Text>
            <FaShoppingCart size="1.2em" />
          </Flex>
        </Flex>

        <Flex display={{ base: "block", md: "none" }} alignSelf="center">
          <BsList
            color="white"
            size="35px"
            _hover={{ color: "main" }}
            onClick={() => setShowMenu(true)}
          />
        </Flex>
      </Flex>

      <Flex
        // display={showCart ? "flex" : "none"}
        display={{ base: "none", md: showCart ? "flex" : "none" }}
        flexDirection="column"
        position="absolute"
        backgroundColor="white"
        shadow="3xl"
        right="1em"
        zIndex="4"
        width="20em"
        maxWidth="20em"
        maxHeight="280px"
        overflowY="auto"
        color="black"
        border="1px solid"
        borderColor="blackAlpha.800"
      >
        <ShoppingCart />
      </Flex>
    </>
  );
};
