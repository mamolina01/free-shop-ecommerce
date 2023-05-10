import { useEffect } from "react";
import { setProducts, startLoadingProducts, setFilteredProducts,addToCart,removeFromCart } from "./";
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
          case "":
            dispatch(setFilteredProducts([]))
        }
    }, [item]);
  };
};

export const addProductToCart=(product)=>{
  const { shoppingCart } = useSelector((state) => state.products);

  return (dispatch)=>{
    let amount=shoppingCart.filter((item)=>item==product)
    console.log(amount)
    // dispatch(addToCart())
  }
}

export const removeProduct=(product)=>{
  const { shoppingCart } = useSelector((state) => state.products);

  return (dispatch)=>{
    console.log(product)
    const temp = shoppingCart.filter((item)=>item==product)
    console.log(temp)
    // dispatch(removeProductToCart(temp))
  }

}