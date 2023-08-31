import { styled } from "styled-components";

const StatusBarColor = (name) => {
  let colorName;

  switch (name) {
    case "hp":
      return (colorName = "#ff5959");
    case "attack":
      return (colorName = "#f5ac78");
    case "defense":
      return (colorName = "#fae078");
    case "special-attack":
      return (colorName = "#9db7f5");
    case "special-defense":
      return (colorName = "#a7db8d");
    case "speed":
      return (colorName = "#fa92b2");
    default:
      return (colorName = "#fafafa");
  }
};
const PkDataStatusContainerStyled = styled("div")``;
const PkDataStatusBoxStyled = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 12px;
`;
const PkDataStatusContentTitleStyled = styled("h3")``;
const PkDataStatusDataBarStyled = styled("span")`
  display: flex;
  box-sizing: border-box;
  width: 255px;
  border-radius: 12px;

  background-color: lightgray;
`;

const PkDataStatusDataStyled = styled("p")`
  position: relative;
  text-transform: capitalize;
  color: black;
  font-size: 14px;
  padding-left: 12px;
  z-index: 1;
  &:after {
    position: absolute;
    content: "";
    border-radius: 12px;
    width: ${({ $widthData }) => $widthData + "px"};
    background-color: ${({ $widthColor }) => StatusBarColor($widthColor)};
    opacity: 0.7;
    height: 21px;
    left: 0;
    z-index: -1;
  }
`;

export {
  PkDataStatusContainerStyled,
  PkDataStatusContentTitleStyled,
  PkDataStatusBoxStyled,
  PkDataStatusDataBarStyled,
  PkDataStatusDataStyled,
};
