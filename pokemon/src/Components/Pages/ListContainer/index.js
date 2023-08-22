import React from "react";
import {
  PkContainerStyled,
  PkCardsContainerStyled,
  PkBtnContainerStyled,
  PkBtnStyled
} from "./style";
import {ReactComponent as ArrowRight} from "../../../Assets/icons/arrow1.svg"
import {ReactComponent as ArrowLeft} from "../../../Assets/icons/arrow2.svg"

import PkCard from "./PkCard";

const ListContainer = ({ data, fetchData }) => {
  React.useEffect(() => {
    // console.log(data);
  }, []);
  return (
    <PkContainerStyled>
      <PkBtnContainerStyled>
        <PkBtnStyled
          $exist={data?.previous === "true"}
          onClick={() => fetchData(data?.previous)}
          disabled={data?.previous ? false : true}
        >
          {<ArrowLeft/>}
          Voltar
        </PkBtnStyled>
        <PkBtnStyled
          $exist={data?.next}
          onClick={() => fetchData(data?.next)}
          disabled={data?.next ? false : true}
        >
          Próxima
          {<ArrowRight/>}
        </PkBtnStyled>
      </PkBtnContainerStyled>
      <PkCardsContainerStyled>
        {data &&
          data?.results.map((pk, index) => <PkCard key={index} pk={pk} />)}
      </PkCardsContainerStyled>
    </PkContainerStyled>
  );
};

export default ListContainer;
