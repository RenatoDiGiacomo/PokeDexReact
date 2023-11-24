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
  overflow-x: visible;
  display: grid;
  flex-direction: row;
  margin-right: 10px;
  grid-gap: 12px;
  flex-wrap: nowrap;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
`;

const PkDexBoxImgStyled = styled("div")`
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 175px;
  height: 100px;
  border-radius: 6px;
  filter: brightness(0.6);
  z-index: 0;
  overflow: hidden;
  &:hover {
    overflow: visible;
    z-index: 2;
    filter: brightness(1);
  }

`;
const PkDexImgStyled = styled("img")`
  width: 100%;
  object-fit: contain;
  border-radius: 6px;
  object-position: 0 -256px;
  transition: all 0.2s ease-out;
  &:hover {
    
    object-position: 0;
    transition: all 0.4s linear;
  }
`;


export { PkContainerStyled, PkTitleText, PkDexImgContainerStyled, PkDexBoxImgStyled, PkDexImgStyled };
