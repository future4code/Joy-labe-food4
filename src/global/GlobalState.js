import React, { useCallback, useContext, useState } from "react";
import GlobalContext from "./GlobalContext"
import { api } from "../api";
import { useCartState } from "../hooks/useCartState";

const GlobalState = (props) => {
    const [rest , setRest] = useState([])
    const [carrinho, setCarrinho] = useState([])

    const [
        cartState,
        addItemCart,
        removeItemCart,
        infoRest,
        setInfoRest,
        clearCart,
    ] = useCartState();


    const cart = {
        cartState,
        addItemCart,
        removeItemCart,
        infoRest,
        setInfoRest,
        clearCart,
    };

    const states = {
        rest,
        carrinho
    }

    const setters = {
        setRest,
        setCarrinho
    }

    const getRestaurants = useCallback(async () => {
        const response = await api.get("/restaurants");

        return response.data.restaurants;
    })

    return (
        <GlobalContext.Provider value={{
            getRestaurants,
            states,
            setters,
            cart
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState

export const useGlobal = () => {
    return useContext(GlobalContext);
};

export const useGlobalStates = () => {
    const { states } = useGlobal();
    return states;
};

export const useGlobalSetters = () => {
    const { setters } = useGlobal();
    return setters;
};
