import React from "react";
import Loading1 from "../../Assets/Img/loading.png";
import LoadingSvg from "../../Assets/Img/pokeball.svg";
import { LoadingContainerStyled, LoadingImgStyled, LoadingTextStyled } from "./style";

const Loading = () => {
  return (
    <LoadingContainerStyled>
      <LoadingImgStyled src={LoadingSvg} />
      <LoadingTextStyled>Carregando Pokedex</LoadingTextStyled>
    </LoadingContainerStyled>
  );
};

export default Loading;
