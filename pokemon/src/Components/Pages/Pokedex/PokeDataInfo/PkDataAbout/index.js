import React from "react";
import {
  PkDataAboutContainerStyled,
  PkDataAboutBoxStyled,
  PkDataAboutContentTitleStyled,
  PkDataAboutContentSubTitleBoxStyled,
  PkDataAboutContentTextStyled,
  PkDataAboutSelectStyled,
  PkDataAboutOptionStyled,
} from "./style";

import Hability from "../../../../../Assets/Img/hidden_ability.png";
import { ReactComponent as Male } from "../../../../../Assets/icons/male.svg";
import { ReactComponent as Female } from "../../../../../Assets/icons/female.svg";

const PkDataAbout = ({ pk, dataPkSpecies }) => {
  const [version, setVersion] = React.useState();

  React.useEffect(() => {
    setVersion(dataPkSpecies.flavor_text_entries[0].version.name);
  }, [dataPkSpecies]);

  console.log("Masculino");
  console.log("Feminino", dataPkSpecies.gender_rate * 12.5);
  return (
    <PkDataAboutContainerStyled>
      <PkDataAboutBoxStyled>
        <PkDataAboutContentTitleStyled>Fisiologia:</PkDataAboutContentTitleStyled>
        <PkDataAboutContentTextStyled>Peso: {pk.weight / 10}Kg </PkDataAboutContentTextStyled>
        <PkDataAboutContentTextStyled>Altura: {pk.height / 10}m</PkDataAboutContentTextStyled>
      </PkDataAboutBoxStyled>
      <PkDataAboutBoxStyled>
        <PkDataAboutContentTitleStyled>Descrição:</PkDataAboutContentTitleStyled>
        <PkDataAboutSelectStyled
          onChange={(e) => setVersion(e.target.value)}
          onSelect={(e) => setVersion(e.target.value)}
        >
          {dataPkSpecies.flavor_text_entries.map((item, index) => (
            <>
              {item.language.name === "en" ? (
                <PkDataAboutOptionStyled key={index} value={item.version.name}>
                  {item.version.name}
                </PkDataAboutOptionStyled>
              ) : (
                <></>
              )}
            </>
          ))}
        </PkDataAboutSelectStyled>

        {dataPkSpecies.flavor_text_entries.map((item, index) => (
          <React.Fragment key={index}>
            {item.language.name === "en" ? (
              <PkDataAboutContentTextStyled>
                {version === item.version.name ? item.flavor_text.replace("\n", "").replace("\f", "") : <></>}
              </PkDataAboutContentTextStyled>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </PkDataAboutBoxStyled>
      <PkDataAboutBoxStyled>
        <PkDataAboutContentTitleStyled>Abilidades:</PkDataAboutContentTitleStyled>
        {pk.abilities.map((item, index) => (
          <>
            <PkDataAboutContentSubTitleBoxStyled>
              {item.ability.name}
              {item.is_hidden ? <img src={Hability} alt={"Abilidade Secreta"} title={"Abilidade Secreta"} /> : ""}
            </PkDataAboutContentSubTitleBoxStyled>
          </>
        ))}
      </PkDataAboutBoxStyled>
      <PkDataAboutBoxStyled>
        <PkDataAboutContentTitleStyled>Crecsimento:</PkDataAboutContentTitleStyled>
        {dataPkSpecies.growth_rate.name}
      </PkDataAboutBoxStyled>
      <PkDataAboutBoxStyled>
        <PkDataAboutContentTitleStyled>Probabilidade de Gênero:</PkDataAboutContentTitleStyled>
        {dataPkSpecies.gender_rate !== -1 ? (
          <>
            <PkDataAboutContentTextStyled>
              <Male />
              {(8 - dataPkSpecies.gender_rate) * 12.5}%
            </PkDataAboutContentTextStyled>
            <PkDataAboutContentTextStyled>
              <Female />
              {dataPkSpecies.gender_rate * 12.5}%
            </PkDataAboutContentTextStyled>
          </>
        ) : (
          <PkDataAboutContentTextStyled>Gênero Desconhecido</PkDataAboutContentTextStyled>
        )}
      </PkDataAboutBoxStyled>
    </PkDataAboutContainerStyled>
  );
};

export default PkDataAbout;
