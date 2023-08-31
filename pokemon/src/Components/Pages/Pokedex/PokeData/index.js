import React from "react";
import { PokeRegionSelectDataStyled } from "./style";
import Loading from "../../../Loading";
import SelectAPokemon from "../../../SelectAPokemon";
import PokeDataInfo from "../PokeDataInfo";

const PokeData = ({ dataPk, loading }) => {

  if (loading) {
    return <Loading />;
  }
  if (dataPk) {
    return (
      <PokeRegionSelectDataStyled>
        <PokeDataInfo pk={dataPk}  />
      </PokeRegionSelectDataStyled>
    );
  } else {
    return (
      <PokeRegionSelectDataStyled>
        <SelectAPokemon />
      </PokeRegionSelectDataStyled>
    );
  }
};

export default PokeData;
