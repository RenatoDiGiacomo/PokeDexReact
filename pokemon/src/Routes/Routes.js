import React from "react";

import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import List from "../Pages/List";
import HeaderMenu from "../Components/HeaderMenu";
import { PagesContainerStyled } from "./style";

const RoutesData = () => {
  return (
    <>
      <HeaderMenu />
      <PagesContainerStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<List />} />
        </Routes>
      </PagesContainerStyled>
      <Outlet />
    </>
  );
};

export default RoutesData;
