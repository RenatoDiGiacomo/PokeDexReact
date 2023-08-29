import { styled } from "styled-components";

const SelectImgContainerStyled = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SelectImgTextStyled = styled("h2")``;
const SelectImgOakStyled = styled("img")`
  width: 100%;
  max-width: 650px;
  transform: rotateY(180deg);
`;

export { SelectImgContainerStyled, SelectImgTextStyled, SelectImgOakStyled };
