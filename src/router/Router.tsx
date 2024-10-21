import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { routes } from "./routes";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProtectedRoutes from "./ProtectedRoutes";
import MuiNavbar from "../components/navbar/MUINavbar";
import Register from "../pages/Register";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MuiNavbar routes={routes}/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route element={<ProtectedRoutes/>} >
        <Route path="/products" element={<Product/>}/>
      </Route>

      <Route>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />

      </Route>

    </Routes>
  );
};

export default Router;
