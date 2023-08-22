import { styled } from "styled-components";

const HeaderSytled = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  background-color: #dedede;
  padding: 0 2rem;
`;
const HeaderLogoTitleStyled = styled.p`
  color: transparent;
  background-color: #b3a125;
  font-family: "PkTitle";
  font-size: 52px;
  text-shadow: 2px 2px 3px #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

const HeaderInputStyled = styled.input`
  border: none;
`;

export { HeaderSytled, HeaderLogoTitleStyled, HeaderInputStyled };
