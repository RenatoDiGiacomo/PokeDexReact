import React from "react";

import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import List from "../Pages/List";
import HeaderMenu from "../Components/HeaderMenu";

const RoutesData = () => {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default RoutesData;
