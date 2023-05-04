import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

export const PreviewGallery = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      gap="1rem"
      backgroundColor="#EBD4D4"
      padding="1em"
      margin="2em"
    >
      <GridItem
        colSpan={2}
        backgroundImage="./clothes.jpg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        objectFit="revert"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        height="20rem"
      >
        <Flex
          height="100%"
          alignContent="center"
          justifyContent="center"
          placeItems="center"
          backgroundColor="rgba(0,0,0,0.5)"
          _hover={{
            backgroundColor: "rgba(0,0,0,0.7)",
            transition:"0.8s"
          }}
        >
          <Text color="white" fontWeight="600" fontSize="3xl" alignContent="center">
            Clothes
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={{ base: 2, md: 1 }}
        backgroundImage="./technology.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        height={{ base: "10em", md: "15em" }}
        textAlign="center"
        alignContent="center"
      >
        <Flex
          height="100%"
          alignContent="center"
          justifyContent="center"
          placeItems="center"
          backgroundColor="rgba(0,0,0,0.5)"
          _hover={{
            backgroundColor: "rgba(0,0,0,0.7)",
            transition:"0.8s"
          }}
        >
          <Text color="white" fontWeight="600" fontSize="3xl" alignContent="center">
            Technology
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        backgroundImage="./jewellery.jpg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        colSpan={{ base: 2, md: 1 }}
        backgroundColor="red"
        alignContent="center"
        justifyContent="center"
        height={{ base: "10em", md: "15em" }}
      >
        <Flex
          height="100%"
          alignContent="center"
          justifyContent="center"
          placeItems="center"
          backgroundColor="rgba(0,0,0,0.5)"
          _hover={{
            backgroundColor: "rgba(0,0,0,0.7)",
            transition:"0.8s"
          }}
        >
          <Text color="white" fontWeight="600" fontSize="3xl" alignContent="center">
            Jewellery
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};
