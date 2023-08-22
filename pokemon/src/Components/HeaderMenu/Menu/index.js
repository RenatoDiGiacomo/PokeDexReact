import React from "react";
import { MenuHamburgerStyled, MenuHamburgerSpanStyled } from "./style";
import NavMenu from "../NavMenu";

const Menu = () => {
  const [menunav, setMenuNav] = React.useState(false);

  return (
    <>
      <MenuHamburgerStyled onClick={() => setMenuNav(!menunav)}>
        {Array.from({ length: 3 }, (_, index) => (
          <MenuHamburgerSpanStyled key={index} $menunav={menunav ? "true":"false"} />
        ))}
      </MenuHamburgerStyled>
      <NavMenu menunav={menunav} setMenuNav={setMenuNav} />
    </>
  );
};

export default Menu;
