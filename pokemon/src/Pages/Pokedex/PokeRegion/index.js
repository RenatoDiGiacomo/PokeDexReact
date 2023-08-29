import React from "react";
import useRequestApi from "../../../Hooks/useRequestApi";
import Loading from "../../../Components/Loading";
import { useNavigate } from "react-router-dom";
import {
  PokeRegionContainerStyled,
  PokeRegionTopStyled,
  PokeRegionTitleStyled,
  PokeRegionBackBtnStyled,
  PokeRegionSelectContainerStyled,
  PokeRegionSelectUlStyled,
  PokeRegionSelectLiStyled,
  PokeRegionSelectDataStyled,
} from "./style";
import PokeData from "../../../Components/Pages/Pokedex/PokeData";

const PokeRegion = () => {
  const { dataRegion, dataPk, loading, fetchPkRegionItems, fetchPkData } = useRequestApi();
  const navigate = useNavigate();
  React.useEffect(() => {
    fetchPkRegionItems(localStorage.getItem("region"));
  }, []);

  return (
    <PokeRegionContainerStyled>
      <PokeRegionTopStyled>
        <PokeRegionBackBtnStyled onClick={() => navigate("/pokedex")}>back</PokeRegionBackBtnStyled>
        <PokeRegionTitleStyled>{localStorage.getItem("RegionName")}</PokeRegionTitleStyled>
      </PokeRegionTopStyled>
      <PokeRegionSelectContainerStyled>
        <PokeRegionSelectUlStyled>
          {dataRegion?.map((item, index) => (
            <PokeRegionSelectLiStyled onClick={() => fetchPkData(item.pokemon_species.url)} key={index}>
              {item.pokemon_species.name}
            </PokeRegionSelectLiStyled>
          ))}
        </PokeRegionSelectUlStyled>
        <PokeData dataPk={dataPk} loading={loading} />
      </PokeRegionSelectContainerStyled>
    </PokeRegionContainerStyled>
  );
};

export default PokeRegion;
