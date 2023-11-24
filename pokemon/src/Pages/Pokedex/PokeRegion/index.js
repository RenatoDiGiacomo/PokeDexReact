import React from "react";
import useRequestApi from "../../../Hooks/useRequestApi";
import { useNavigate } from "react-router-dom";
import {
  PokeRegionContainerStyled,
  PokeRegionTopStyled,
  PokeRegionTitleStyled,
  PokeRegionBackBtnStyled,
  PokeRegionSelectContainerStyled,
  PokeRegionSelectUlStyled,
  PokeRegionSelectLiStyled,
  PokeRegionSelectBoxStyled,
  PokeRegionInputBoxStyled,
  PokeRegionInputStyled,
} from "./style";
import PokeData from "../../../Components/Pages/Pokedex/PokeData";

const PokeRegion = () => {
  const { dataRegion, dataPk, loading, fetchPkRegionItems, fetchPkData } = useRequestApi();
  const navigate = useNavigate();
  const [filterInput, setFilterInput] = React.useState(null);

  const HandleFilter = (pk) => {
    if (filterInput !== null) {
      if (pk.pokemon_species.name.includes(filterInput)) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  };

  React.useEffect(() => {
    fetchPkRegionItems(localStorage.getItem("region"));
  }, []);

  return (
    <PokeRegionContainerStyled>
      <PokeRegionTopStyled>
        <PokeRegionBackBtnStyled onClick={() => navigate("/pokedex")}>Voltar </PokeRegionBackBtnStyled>
        <PokeRegionTitleStyled>Região de {localStorage.getItem("RegionName")}</PokeRegionTitleStyled>
      </PokeRegionTopStyled>
      <PokeRegionSelectContainerStyled>
        <PokeRegionSelectBoxStyled>
          <PokeRegionInputBoxStyled>
            <PokeRegionInputStyled placeholder="Procurar Pokemon" onChange={({ target }) => setFilterInput(target.value)} type="text" id="PkInput" />
          </PokeRegionInputBoxStyled>
          <PokeRegionSelectUlStyled>
            {dataRegion &&
              dataRegion.filter(HandleFilter).map((item, index) => (
                <PokeRegionSelectLiStyled onClick={() => fetchPkData(item.pokemon_species.url)} key={index}>
                  #{item.entry_number}-{item.pokemon_species.name}
                </PokeRegionSelectLiStyled>
              ))}
          </PokeRegionSelectUlStyled>
        </PokeRegionSelectBoxStyled>
        <PokeData dataPk={dataPk} loading={loading} />
      </PokeRegionSelectContainerStyled>
    </PokeRegionContainerStyled>
  );
};

export default PokeRegion;
