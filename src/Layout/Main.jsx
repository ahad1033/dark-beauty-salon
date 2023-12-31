import React from "react";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div style={{ backgroundColor: "#212223" }}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
