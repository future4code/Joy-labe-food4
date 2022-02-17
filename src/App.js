import React from "react";
import { GlobalState } from "./global/GlobalState";
import AdressPage from "./page/AdressPage/AdressPage";
import { Router } from "./routes/Router";

function App() {
  return (
    <AdressPage />
    // <GlobalState>
    //   <Router/>
    // </GlobalState>
  );
}

export default App;
