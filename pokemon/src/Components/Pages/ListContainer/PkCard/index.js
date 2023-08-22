import React from "react";
import {
  PkCardStyled,
  PkCardTextContainerStyled,
  PkTextIdStyled,
  PkTextTitleStyled,
  PkFirstImgStyled,
} from "./style";
import Loading from "../../../../Assets/Img/loading.gif";
import useRequestApi from "../../../../Hooks/useRequestApi";

const PkCard = ({ pk }) => {
  const { data, fetchData } = useRequestApi();
  const [loadingImg, setLoadingImg] = React.useState(true);

  const LoadingData = () => {
    setLoadingImg(false);
  };

  React.useEffect(() => {
    fetchData(pk.url);
  }, []);

  return (
    <PkCardStyled>
      <PkCardTextContainerStyled>
        <PkTextIdStyled>{data?.id}</PkTextIdStyled>
        <PkTextTitleStyled>{data?.name}</PkTextTitleStyled>
      </PkCardTextContainerStyled>
      <PkFirstImgStyled
        src={loadingImg ? Loading : data?.sprites.other.home.front_default}
        alt={data?.name + data?.id}
        onLoad={LoadingData}
      />
    </PkCardStyled>
  );
};

export default PkCard;
