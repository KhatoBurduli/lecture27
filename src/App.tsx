import React from "react";
import "./App.css";
import Router from "./router/Router";
import { routes } from "./router/routes";
import { AuthProvider } from "./context/authContext";

const App: React.FC = () => {
  return (
    <>
      {/* {<NavBar routes={routes} isVertical={true} />}     */}
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
};

export default App;
