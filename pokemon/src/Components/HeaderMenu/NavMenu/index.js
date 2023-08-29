import React from "react";
import { Link } from "react-router-dom";
import {
  MenuHamburgerNavSytled,
  MenuHamburgerUlSytled,
  MenuHamburgerLiSytled,
} from "./style";

const NavMenu = ({ menunav, setMenuNav }) => {
  return (
    <MenuHamburgerNavSytled $menunav={menunav ? "true" : "false"}>
      <MenuHamburgerUlSytled>
        <MenuHamburgerLiSytled>
          <Link to="/" onClick={()=>setMenuNav(false)}>Início</Link>
        </MenuHamburgerLiSytled>
        <MenuHamburgerLiSytled>
          <Link to="/pokedex" onClick={()=>setMenuNav(false)}>Pokedex</Link>
        </MenuHamburgerLiSytled>

      </MenuHamburgerUlSytled>
    </MenuHamburgerNavSytled>
  );
};

export default NavMenu;
