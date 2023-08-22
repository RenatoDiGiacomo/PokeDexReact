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
          <Link to="/" onClick={()=>setMenuNav(false)}>Home</Link>
        </MenuHamburgerLiSytled>
        <MenuHamburgerLiSytled>
          <Link to="/list" onClick={()=>setMenuNav(false)}>List</Link>
        </MenuHamburgerLiSytled>
      </MenuHamburgerUlSytled>
    </MenuHamburgerNavSytled>
  );
};

export default NavMenu;
