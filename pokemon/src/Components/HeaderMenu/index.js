import React from "react";
import { HeaderSytled, HeaderLogoTitleStyled } from "./style";
import Menu from "./Menu";

const HeaderMenu = () => {
  return (
    <HeaderSytled>
      <Menu />
      <HeaderLogoTitleStyled>PokeDex</HeaderLogoTitleStyled>
    </HeaderSytled>
  );
};

export default HeaderMenu;
