import React, { useCallback, useState } from "react";
import GlobalContext from "./GlobalContext"
import { api } from "../api";

const GlobalState = (props) => {

    const [rest , setRest] = useState([])

    const states ={
        rest
    } 

    const setters = {
        setRest
    }

    const getRestaurants = useCallback(async () => {
        const response = await api.get("/restaurants");

        return response.data.restaurants;
    })

    return (
        <GlobalContext.Provider value={{
            getRestaurants,
            states,
            setters
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState