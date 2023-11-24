import React from "react";
import useRequestApi from "../../Hooks/useRequestApi";
import Loading from "../../Components/Loading";

import kanto from "../../Assets/Img/regions/kanto.png";
import johto from "../../Assets/Img/regions/johto.png";
import hoenn from "../../Assets/Img/regions/hoenn.png";
import kalos from "../../Assets/Img/regions/kalos.png";
import unova from "../../Assets/Img/regions/unova.png";
import alola from "../../Assets/Img/regions/alola.png";
import galar from "../../Assets/Img/regions/galar.png";
import paldea from "../../Assets/Img/regions/paldea.png";

import { PkContainerStyled, PkTitleText, PkDexImgContainerStyled, PkDexImgStyled, PkDexBoxImgStyled } from "./style";
import { useNavigate } from "react-router-dom";

const Pokedex = () => {
  const { dataPokedex, dataRegion, loading, fetchDataList, fetchPkRegionItems } = useRequestApi();
  const navigate = useNavigate();
  const imgData = {
    kanto: kanto,
    johto: johto,
    hoenn: hoenn,
    kalos: kalos,
    unova: unova,
    alola: alola,
    galar: galar,
    paldea: paldea,
  };

  const handleSelect = (url) => {
    localStorage.setItem("region", url);
    navigate("pokeRegion");
  };

  React.useEffect(() => {
    fetchDataList("https://pokeapi.co/api/v2/region");
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <PkContainerStyled>
      <PkTitleText>Selecione a Região</PkTitleText>
      <PkDexImgContainerStyled>
        {dataPokedex &&
          dataPokedex?.results?.map((item, index) => (
            <React.Fragment key={index}>
              {imgData[item.name] && (
                <PkDexBoxImgStyled>
                  <PkDexImgStyled
                    onClick={() => handleSelect(item.url)}
                    src={imgData[item.name]}
                    alt={`REGIÃO DE ${item.name.toUpperCase()}`}
                    title={`REGIÃO DE ${item.name.toUpperCase()}`}
                  />
                </PkDexBoxImgStyled>
              )}
            </React.Fragment>
          ))}
      </PkDexImgContainerStyled>
    </PkContainerStyled>
  );
};

export default Pokedex;
