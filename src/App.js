import React from "react";
import { GlobalProvider } from "./global/GlobalContext";
import  Router  from "./routes/Router";
// import LoginPage from "./page/LoginPage/LoginPage";
// import SplashScreen from "./page/SplashScreen/SplashScreen";

function App() {
  return (
    <>
     {/* <LoginPage> */}
    {/* <SplashScreen>  */}
      <GlobalProvider>
        <Router/>
      </GlobalProvider>
      {/* </SplashScreen> */}
      {/* </LoginPage>  */}
    </>
  );
}

export default App;
