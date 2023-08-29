import { styled, keyframes } from "styled-components";

const rotatePk = keyframes`
from{
  transform: rotateZ(0deg);
}

to{
  
  transform: rotateZ(360deg);
}
`;

const LoadingContainerStyled = styled("div")`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
const LoadingImgStyled = styled("img")`
  max-width: 250px;
  animation: ${rotatePk} 1.3s linear infinite;
`;
const LoadingTextStyled = styled("p")`
  font-family: PkText;
  font-size: 42px;
`;

export { LoadingContainerStyled, LoadingImgStyled, LoadingTextStyled };
