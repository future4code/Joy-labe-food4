import React, {useState} from "react";
import GlobalContext from "./GlobalContext"

export const GlobalState = (props) =>{
    const [] = useState([])

    return(
        <GlobalContext.provider value={{}}>
            {props.children}
        </GlobalContext.provider>
    )
}