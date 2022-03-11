import { useState } from "react";

export const useCartState = () => {
  const [cartState, setCartState] = useState([]);
  const [infoRest, setInfoRest] = useState({});

  const addItemCart = (item) => {
    setCartState([...cartState, item]);
  };

  const removeItemCart = (id) => {
    const newArray = cartState.filter((item) => item.id !== id);
    setCartState(newArray);
  };

  const clearCart = () => {
    setCartState([]);
    setInfoRest({});
  };

  return [
    cartState,
    addItemCart,
    removeItemCart,
    infoRest,
    setInfoRest,
    clearCart,
  ];
};
