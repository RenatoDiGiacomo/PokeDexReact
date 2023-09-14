import React from "react";
import {
  PokeInfoContainerStyled,
  PokeInfoTypeBgStyled,
  PokeInfoTypeBoxStyled,
  PokeInfoTypeDataStyled,
  PokeInfoTitleStyled,
  PokeInfoDataContainerStyled,
  PokeInfoDataPkImgContainerStyled,
  PokeInfoDataPkImgStyled,
  PokeInfoPkContentContainerStyled,
  PokeInfoPkContentBoxStyled,
} from "./style";
import PokeTabsInfo from "./PokeTabsInfo";
import PokeSelectedItem from "./PokeSelectedItem";

import LoadingImg from "../../../../Assets/Img/loadingImg.gif";
import useRequestApi from "../../../../Hooks/useRequestApi";

const PokeDataInfo = ({ pk }) => {
  const { dataPkSpecies, fetchPkSpecies } = useRequestApi();
  const [ImgLoad, setImgLoad] = React.useState(false);
  const [tabSelect, setTabSelect] = React.useState(1);

  React.useEffect(() => {
    fetchPkSpecies(pk.species.url);
  }, []);

  return (
    <PokeInfoContainerStyled>
      <PokeInfoTypeBgStyled $typeBg={pk.types[0].type.name}>
        <PokeInfoTitleStyled $typeColor={pk.types[0].type.name}>
          #{pk.id}-{pk.name}
        </PokeInfoTitleStyled>
      </PokeInfoTypeBgStyled>
      <PokeInfoDataContainerStyled>
        <PokeInfoDataPkImgContainerStyled>
          <PokeInfoDataPkImgStyled
            src={ImgLoad ? pk.sprites.other["official-artwork"].front_default : LoadingImg}
            alt={pk.name}
            title={pk.name}
            onLoad={() => setImgLoad(true)}
          />
        </PokeInfoDataPkImgContainerStyled>
        <PokeInfoPkContentContainerStyled>
          <PokeInfoTypeBoxStyled>
            {pk.types.map((item, index) => (
              <PokeInfoTypeDataStyled key={index} $typeBg={item.type.name}>
                {item.type.name}
              </PokeInfoTypeDataStyled>
            ))}
          </PokeInfoTypeBoxStyled>

          <PokeTabsInfo tabSelect={tabSelect} setTabSelect={setTabSelect} />

          <PokeInfoPkContentBoxStyled>
            <PokeSelectedItem tabSelect={tabSelect} dataPkSpecies={dataPkSpecies} pk={pk} />
          </PokeInfoPkContentBoxStyled>
        </PokeInfoPkContentContainerStyled>
      </PokeInfoDataContainerStyled>
    </PokeInfoContainerStyled>
  );
};

export default PokeDataInfo;
