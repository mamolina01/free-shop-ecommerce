import { Flex, Box, Text, Image, Divider } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const NavBar = () => {
  const { shoppingCart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        alignContent="center"
        justify="space-between"
        width="100%"
        padding="0.5em 1em"
        shadow="md"
        backgroundColor="#EBD4D4"
        color="#835858"
      >
        <Link to="/">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ color: "#463333" }}
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
              _hover={{ color: "#463333" }}
            >
              Products
            </Text>
          </Link>

          <Text
            fontSize="xl"
            fontWeight="600"
            cursor="pointer"
            _hover={{ color: "#463333" }}
          >
            About
          </Text>

          <Flex
            padding="2px 10px"
            backgroundColor="#835858"
            color="#EBD4D4"
            borderRadius="5px"
            cursor="pointer"
            _hover={{ backgroundColor: "#463333" }}
          >
            <Text>{shoppingCart.length}</Text>
            <FaShoppingCart size="1.5em" />
          </Flex>
        </Flex>

        <Flex display={{ base: "block", md: "none" }}>
          <BsList color="#835858" size="35px" _hover={{ color: "#463333" }} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        position="absolute"
        backgroundColor="white"
        shadow="md"
        right="1em"
        zIndex="4"
      >
        {shoppingCart.map((product) => (
          <Flex padding="1em" borderBottom="1px solid #EEEEEE" key={`navbar ${product.title}`}>
            <Image
              src={product.image}
              alt={product.title}
              objectFit="contain"
              height="4em"
              width="4em"
            />
            <Flex flexDirection="column">
              <Text color="black">{product.title}</Text>
              <Text fontWeight="bold">${product.price}</Text>
              <Text
                textDecoration="underline"
                cursor="pointer"
                // onClick={() => dispatch(removeProduct(product))}
              >
                Eliminar
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
