import React from "react";
import { GlobalProvider } from "./global/GlobalContext";
import  Router  from "./routes/Router";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router/>
      </GlobalProvider>
    </>
  );
}

export default App;
