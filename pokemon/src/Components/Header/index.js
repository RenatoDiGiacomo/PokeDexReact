import React from "react";
import { Link } from "react-router-dom";
import { HeaderNavStyled, HeaderUlStyled, HeaderLiStyled } from "./styled.js";

export default () => {
  return (
    <HeaderNavStyled>
      <h1>Pokedex</h1>
      <HeaderUlStyled>
        <HeaderLiStyled>
          <Link to="/">item 1</Link>
        </HeaderLiStyled>
        <HeaderLiStyled>
          <Link to="/list">item 2</Link>
        </HeaderLiStyled>
      </HeaderUlStyled>
    </HeaderNavStyled>
  );
};
