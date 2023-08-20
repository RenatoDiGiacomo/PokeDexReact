import styled from "styled-components";

const MenuHamburgerStyled = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 10;
  transition: all 0.2s ease-in;
`;
const MenuHamburgerSpanStyled = styled.span`
  height: 3px;
  background-color: black;
  transition: all 0.2s ease-in;
  position: relative;
  &:nth-child(1) {
    top: ${({ menuNav }) => (menuNav === "true" ? "8px" : "initial")};
    width: 31px;
    transform: ${({ menuNav }) =>
      menuNav === "true" ? "rotateZ(45deg)" : "rotateZ(0)"};
  }
  &:nth-child(2) {
    width: ${({ menuNav }) => (menuNav === "true" ? "0px" : "31px")};
  }
  &:nth-child(3) {
    width: 31px;
    bottom: ${({ menuNav }) => (menuNav === "true" ? "6px" : "initial")};
    transform: ${({ menuNav }) =>
      menuNav === "true" ? "rotateZ(-45deg)" : "rotateZ(0)"};
  }
`;

export { MenuHamburgerStyled, MenuHamburgerSpanStyled };
