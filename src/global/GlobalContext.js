import React, { useCallback, useContext } from "react";
import { api } from "../api";

const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }) => {

  const getRestaurants = useCallback( async () => {
    const response = await api.get("/restaurants");

    return response.data.restaurants;
  })

  return (
    <GlobalContext.Provider value={{
      getRestaurants
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);

  return context;
}
