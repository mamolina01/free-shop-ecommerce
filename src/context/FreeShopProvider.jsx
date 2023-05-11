import React, { useState } from "react";
import { FreeShopContext } from "./FreeShopContext";

export const FreeShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <FreeShopContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        shoppingCart,
        setShoppingCart,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FreeShopContext.Provider>
  );
};
