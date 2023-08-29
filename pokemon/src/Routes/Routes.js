import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { PagesContainerStyled } from "./style";

import HeaderMenu from "../Components/HeaderMenu";
import MainContainerStyled from "../Components/MainContainer/style";
import Home from "../Pages/Home";
import Pokedex from "../Pages/Pokedex";
import PokeRegion from "../Pages/Pokedex/PokeRegion";

const RoutesData = () => {
  return (
    <>
      <HeaderMenu />
      <PagesContainerStyled>
        <MainContainerStyled>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex">
              <Route index element={<Pokedex />} />
              <Route path="pokeRegion" element={<PokeRegion />} />
            </Route>
          </Routes>
        </MainContainerStyled>
      </PagesContainerStyled>

      <Outlet />
    </>
  );
};

export default RoutesData;
