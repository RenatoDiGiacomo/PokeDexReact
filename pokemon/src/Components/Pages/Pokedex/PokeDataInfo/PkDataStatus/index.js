import React from "react";
import {
  PkDataStatusContainerStyled,
  PkDataStatusContentTitleStyled,
  PkDataStatusBoxStyled,
  PkDataStatusDataBarStyled,
  PkDataStatusDataStyled,
} from "./style";

const PkDataStatus = ({pk}) => {
  return (
    <PkDataStatusContainerStyled>
      <PkDataStatusContentTitleStyled>Status Base:</PkDataStatusContentTitleStyled>
      <PkDataStatusBoxStyled>
        {pk.stats.map((stat, index) => (
          <PkDataStatusDataBarStyled key={index}>
            <PkDataStatusDataStyled $widthColor={stat.stat.name} $widthData={stat.base_stat}>
              {stat.stat.name}: {stat.base_stat}
            </PkDataStatusDataStyled>
          </PkDataStatusDataBarStyled>
        ))}
      </PkDataStatusBoxStyled>
    </PkDataStatusContainerStyled>
  );
};

export default PkDataStatus;
