import React, {useState} from "react";
import GlobalContext from "./GlobalContext"

const GlobalState = (props) =>{
    const [car, setCar] = useState([])

    const states = {
        car
    }

    const setters = {
        setCar
    }

    return(
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState