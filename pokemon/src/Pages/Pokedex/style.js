import styled from "styled-components";

const PkContainerStyled = styled("div")`
  width: 100%;
`;

const PkTitleText = styled("h1")`
  width: 100%;
  text-align: center;
`;
const PkDexImgContainerStyled = styled("div")`
  width: 100%;
  display: grid;
  margin-right: 10px;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
`;
const PkDexImgStyled = styled("img")`
  cursor: pointer;
  width: 100%;
  max-width: 175px;
  height: 350px;
  object-fit: cover;
  border: 1px solid #0000005c;
  border-radius: 6px;
  filter: brightness(0.6);
  z-index: 1;
  transition: all 0.4s linear;
  &:hover {
    height: auto;
    transform: scale(1.2);
    z-index: 2;
    filter: brightness(1);
    transition: all 0.4s linear;
  }
`;

export { PkContainerStyled, PkTitleText, PkDexImgContainerStyled, PkDexImgStyled };
