import styled from "styled-components";

const MenuHamburgerNavSytled = styled.nav`
  position: fixed;
  width: 250px;
  transform: translateX(${({ menu }) => (menu === "true" ? "0" : "-250px")});
  height: 50vh;
  background-color: red;
  top: 56px;
  left: 0;
  transition: all .2s ease-in;
`;
const MenuHamburgerUlSytled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: inherit;
`;
const MenuHamburgerLiSytled = styled.li`
  padding: 1rem 2rem;
  & a {
    font-size: 21px;
    text-decoration: none;
  }
`;

export { MenuHamburgerNavSytled, MenuHamburgerUlSytled, MenuHamburgerLiSytled };
