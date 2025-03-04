import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Fotter";

export default function () {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer/>
    </>
  );
}
