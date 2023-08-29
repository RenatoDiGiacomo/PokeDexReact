import React from "react";
import {
  PokeInfoContainerStyled,
  PokeInfoTypeBgStyled,
  PokeInfoTitleStyled,
  PokeInfoDataContainerStyled,
  PokeInfoDataPkImgStyled,
} from "./style";


const PokeDataInfo = ({ pk }) => {

console.log(pk)

  return (
    <PokeInfoContainerStyled>
      <PokeInfoTypeBgStyled $typeBg={pk.types[0].type.name}>
        <PokeInfoTitleStyled $typeColor={pk.types[0].type.name}>#{pk.id}-{pk.name}</PokeInfoTitleStyled>
      </PokeInfoTypeBgStyled>
      <PokeInfoDataContainerStyled>
        <PokeInfoDataPkImgStyled src={pk.sprites.other["official-artwork"].front_default}/>
        </PokeInfoDataContainerStyled>
    </PokeInfoContainerStyled>
  );
};

export default PokeDataInfo;
