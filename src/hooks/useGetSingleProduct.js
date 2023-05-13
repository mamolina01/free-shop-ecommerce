import { useEffect, useState } from "react";

export const useGetSingleProduct = (query = "") => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const manageApi = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${query}`)
        .then((response) => response.json())
        .then((result) => result);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    // setIsLoading(true)
    try {
      const products = await manageApi();
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);


  return { products, isLoading };
};
