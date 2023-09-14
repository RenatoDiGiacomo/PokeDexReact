import { styled } from "styled-components";

const HomeContainerStyled = styled("div")`
  display: flex;
  flex-direction: column;
`;

const HomeTitleStyled = styled("h1")``;
const HomeTextStyled = styled("p")`
  font-size: 18px;
`;
const HomeLinkStyled = styled("a")`
  cursor: pointer;
  font-size: 18px;
  text-decoration: underline;
`;

export { HomeContainerStyled, HomeTitleStyled, HomeTextStyled, HomeLinkStyled };
