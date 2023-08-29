import { styled, css } from "styled-components";
import bgtype from "../../../../Assets/Img/bgtype.png";
import TypeListColorPallet from "../../../../Hooks/useTypeList";

const BgColorByType = (typePK) => {
  let background;
  TypeListColorPallet.forEach((item) => {
    if (item.type === typePK) {
      return (background = item.bgColor);
    }
  });
  return css`
    background-color: ${background};
  `;
};
const ColorByType = (typePK) => {
  let colorText;
  TypeListColorPallet.forEach((item) => {
    if (item.type === typePK) {
      return (colorText = item.color);
    }
  });
  return css`
    color: ${colorText};
  `;
};

const PokeInfoContainerStyled = styled("div")`
  width: 100%;
`;
const PokeInfoTypeBgStyled = styled("div")`
  width: 100%;
  height: 320px;
  ${({ $typeBg }) => BgColorByType($typeBg)}
  background-image: url(${bgtype});
  background-size: cover;
  background-repeat: no-repeat;

  margin-bottom: -21px;
  padding: 1rem;
`;
const PokeInfoTitleStyled = styled("h2")`
  ${({ $typeColor }) => ColorByType($typeColor)};
  text-transform: capitalize;
`;

const PokeInfoDataContainerStyled = styled("div")`
  width: 100%;
  padding: 1rem;
  border: 1px solid gray;
  background-color: white;
  border-radius: 26px 26px 0 0;
  position: relative;
  display: flex;
  justify-content: center;
  &:after {
    position: absolute;
    content: "";
    width: 200px;
    height: 50px;
    top: 40px;
    background-color: #00000024;
    box-shadow: 2px 2px 4px 4px #00000024;
    border-radius: 50%;
  }
`;
const PokeInfoDataPkImgStyled = styled("img")`
  position: relative;
  top: -180px;
  width: 100%;
  max-width: 250px;
  z-index: 2;
  
`;

export {
  PokeInfoContainerStyled,
  PokeInfoTypeBgStyled,
  PokeInfoTitleStyled,
  PokeInfoDataContainerStyled,
  PokeInfoDataPkImgStyled,
};
