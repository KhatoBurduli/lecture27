import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { routes } from "./routes";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProtectedRoutes from "../components/ProtectedRoutes";
import MuiNavbar from "../components/MUINavbar";

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

      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Router;
