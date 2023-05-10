import { useEffect } from "react";
import { setProducts, startLoadingProducts, setFilteredProducts } from "./";
import { useSelector } from "react-redux";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(startLoadingProducts);

    const data = await fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((result) => result);
    dispatch(setProducts(data));
  };
};

export const setFilterProducts = ({item,type}) => {
  return async (dispatch) => {
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
      let result = [];
        dispatch(startLoadingProducts);

        switch (type) {
          case "price":
            result = products.filter((product) => product.price < item);
            dispatch(setFilteredProducts(result));
            break;
          case "rate":
            result = products.filter(
              (product) => product.rating.rate < item
            );
            dispatch(setFilteredProducts(result));
            break;
          case "category":
            result = products.filter((product) => product.category == item);
            dispatch(setFilteredProducts(result));
            break;
          case "clean":
            dispatch(setFilteredProducts([]))
        }
    }, [item]);
  };
};
