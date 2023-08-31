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

const PkDataAbout = ({ pk, dataPkSpecies }) => {
  const [version, setVersion] = React.useState();

  // console.log("pk", pk);
  // console.log("dataPkSpecies", dataPkSpecies);

  React.useEffect(() => {
    setVersion(dataPkSpecies.flavor_text_entries[0].version.name);
  }, [dataPkSpecies]);
  console.log("version", version);
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
                {version === item.version.name ? item.flavor_text : <></>}
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
              {item.is_hidden ? " --> Habilidade Secreta" : ""}
            </PkDataAboutContentSubTitleBoxStyled>
          </>
        ))}
      </PkDataAboutBoxStyled>
    </PkDataAboutContainerStyled>
  );
};

export default PkDataAbout;
