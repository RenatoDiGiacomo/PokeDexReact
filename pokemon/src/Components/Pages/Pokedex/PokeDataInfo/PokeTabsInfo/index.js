import React from "react";
import { PokeTabsUlStyled, PokeTabsLiStyled } from "./style";

const PokeTabsInfo = ({ tabSelect, setTabSelect }) => {
  return (
    <PokeTabsUlStyled>
      <PokeTabsLiStyled value={1} onClick={({ target }) => setTabSelect(target.value)}>
        Sobre
      </PokeTabsLiStyled>
      <PokeTabsLiStyled value={2} onClick={({ target }) => setTabSelect(target.value)}>
        Status Base
      </PokeTabsLiStyled>
      <PokeTabsLiStyled value={3} onClick={({ target }) => setTabSelect(target.value)}>
        Evolução
      </PokeTabsLiStyled>
      <PokeTabsLiStyled value={4} onClick={({ target }) => setTabSelect(target.value)}>
        Ataques
      </PokeTabsLiStyled>
      <PokeTabsLiStyled value={5} onClick={({ target }) => setTabSelect(target.value)}>
        Localização
      </PokeTabsLiStyled>
    </PokeTabsUlStyled>
  );
};

export default PokeTabsInfo;
