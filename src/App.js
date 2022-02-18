import React from "react";
import { GlobalState } from "./global/GlobalState";
import SignUp from "./page/SignUpPage/SignUp";
import { Router } from "./routes/Router";

function App() {
  return (
    <SignUp />
    // <GlobalState>
    //   <Router/>
    // </GlobalState>
  );
}

export default App;
