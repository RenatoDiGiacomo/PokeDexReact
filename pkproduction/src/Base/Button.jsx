import React from "react";

const Pokemon = ({ dados, props }) => {
  return <>{dados && <div>{dados}</div>}</>;
};

export default Pokemon;
