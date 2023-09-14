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
  PokeRegionBtnStyled,
} from "./style";
import PokeData from "../../../Components/Pages/Pokedex/PokeData";

const PokeRegion = () => {
  const { dataRegion, dataPk, loading, fetchPkRegionItems, fetchPkData } = useRequestApi();
  const navigate = useNavigate();
  const [filterInput, setFilterInput] = React.useState("");

  const HandleFilter = (e) => {
    if (e?.pokemon_species?.name === filterInput) {
      return e.pokemon_species.name;
    } else {
      return e.pokemon_species.name;
    }

    // console.log(filterInput);
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
            <datalist id="PkList">
              {dataRegion?.map((item, index) => (
                <option key={index} value={item.pokemon_species.name}>
                  {item.entry_number}-{item.pokemon_species.name}
                </option>
              ))}
            </datalist>
            <PokeRegionInputStyled
              onChange={({ target }) => setFilterInput(target.value)}
              list="PkList"
              type="text"
              id="PkInput"
            />
            <PokeRegionBtnStyled onClick={(e) => HandleFilter(e)}>Procurar</PokeRegionBtnStyled>
          </PokeRegionInputBoxStyled>
          <PokeRegionSelectUlStyled>
            {dataRegion?.filter(HandleFilter).map((item, index) => (
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
