import { useContext, useEffect } from "react";
import { FreeShopContext } from "../context";

export const useGetProducts = (query = "") => {
  const { setProducts, setIsLoading } = useContext(FreeShopContext);

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

};
