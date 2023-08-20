import React from "react";
import { Link } from "react-router-dom";
import {
  MenuHamburgerNavSytled,
  MenuHamburgerUlSytled,
  MenuHamburgerLiSytled,
} from "./style";

const NavMenu = ({ menuNav, setMenuNav }) => {
  return (
    <MenuHamburgerNavSytled menu={menuNav ? "true" : "false"}>
      <MenuHamburgerUlSytled>
        <MenuHamburgerLiSytled>
          <Link to="/">Home</Link>
        </MenuHamburgerLiSytled>
        <MenuHamburgerLiSytled>
          <Link to="/list">List</Link>
        </MenuHamburgerLiSytled>
      </MenuHamburgerUlSytled>
    </MenuHamburgerNavSytled>
  );
};

export default NavMenu;
