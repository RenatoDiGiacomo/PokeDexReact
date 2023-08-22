import React from "react";
import { HeaderSytled, HeaderLogoTitleStyled, HeaderInputStyled } from "./style";
import Menu from "./Menu";

const HeaderMenu = () => {
  return (
    <HeaderSytled>
      <Menu/>
      <HeaderLogoTitleStyled>PokeDex</HeaderLogoTitleStyled>
      <datalist id="search">
        <option>item1</option>
        <option>item2</option>
      </datalist>
      <HeaderInputStyled type="text"  autoComplete="on" list="search" />
    </HeaderSytled>
  );
};

export default HeaderMenu;
