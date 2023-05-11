import { filter } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FreeShopContext } from "../context";

export const useFilterProducts = (filterItem, filterBy) => {
  const { products, setFilteredProducts } = useContext(FreeShopContext);

  const manageApi = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${filterItem}`
      )
        .then((response) => response.json())
        .then((result) => result);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    // setIsLoading(true)
    try {
      const result = await manageApi();
      // console.log("categories..");
      // console.log(result);
      setFilteredProducts(result);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    // console.log(filterBy);
    // console.log(`filterItem: ${filterItem}`);
    let result = [];
    if (filterItem !== "") {
      switch (filterBy) {
        case "price":
          result = products.filter((product) => product.price < filterItem);
          setFilteredProducts(result);
          break;
        case "rate":
          result = products.filter(
            (product) => product.rating.rate < filterItem
          );
          setFilteredProducts(result);
          break;
        case "category":
          getCategories();
          break;
      }
    }

    // if (typeof result === "array") {
    // 	setFilteredProducts(result);
    // }
  }, [filterItem]);
};
