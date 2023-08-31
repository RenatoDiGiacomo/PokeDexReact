import React from "react";
import PkDataAbout from "../PkDataAbout";
import PkDataStatus from "../PkDataStatus";

const PokeSelectedItem = ({ tabSelect, pk, dataPkSpecies }) => {
  React.useEffect(() => {
    console.log(tabSelect);
  }, [tabSelect]);

  if (pk && dataPkSpecies) {
    switch (tabSelect) {
      case 1:
        return <PkDataAbout pk={pk} dataPkSpecies={dataPkSpecies} />;
      case 2:
        return <PkDataStatus pk={pk} dataPkSpecies={dataPkSpecies} />;
      // case 3:
      //   return <PkDataAbout/>;
      // case 4:
      //   return <PkDataAbout/>;
      // case 5:
      //   return <PkDataAbout/>;

      default:
        return <div>Nada Encontrado</div>;
    }
  }
};

export default PokeSelectedItem;
