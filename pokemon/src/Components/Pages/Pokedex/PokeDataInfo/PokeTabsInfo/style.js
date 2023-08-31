import { styled } from "styled-components";

const PokeTabsUlStyled = styled("ul")`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 21px;
`;
const PokeTabsLiStyled = styled("li")`
  cursor: pointer;
  width: 100%;
  justify-content: center;
  display: flex;
  background-color: lightgray;
  border-radius: 12px 12px 0 0;
  padding: 0.5rem 1rem;
  color: black;
  transition: all 0.3s linear;
  &:hover {
    background-color: darkgray;
    color: white;
    transition: all 0.3s linear;
  }
`;

export { PokeTabsUlStyled, PokeTabsLiStyled };
