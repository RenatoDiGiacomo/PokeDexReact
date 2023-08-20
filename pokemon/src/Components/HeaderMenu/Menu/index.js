import React from "react";
import { MenuHamburgerStyled, MenuHamburgerSpanStyled } from "./style";
import NavMenu from "../NavMenu";

const Menu = () => {
  const [menuNav, setMenuNav] = React.useState(false);

  return (
    <>
      <MenuHamburgerStyled onClick={() => setMenuNav(!menuNav)}>
        {Array.from({ length: 3 }, (_, index) => (
          <MenuHamburgerSpanStyled index={index} menuNav={menuNav ? "true":"false"} />
        ))}
      </MenuHamburgerStyled>
      <NavMenu menuNav={menuNav} setMenuNav={setMenuNav} />
    </>
  );
};

export default Menu;
