import React from "react";

import Oak from "../../Assets/Img/oak.webp";
import { SelectImgContainerStyled, SelectImgTextStyled, SelectImgOakStyled } from "./style";

const SelectAPokemon = () => {
  return (
    <SelectImgContainerStyled>
      <SelectImgTextStyled>Selecione um Pokemon ao Lado</SelectImgTextStyled>
      <SelectImgOakStyled src={Oak} />
    </SelectImgContainerStyled>
  );
};

export default SelectAPokemon;
