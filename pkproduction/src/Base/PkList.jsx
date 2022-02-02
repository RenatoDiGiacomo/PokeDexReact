import React from "react";

const PkList = (props) => {
  if (props.menu) {


    return (
      <ul>
        {Object.entries(props.menu).map((item) => (
          <li key={item[1]} onClick={() => console.log(item[1])}>
            {item[0]}
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <>
        <p>Página não encontrada</p>
      </>
    );
  }
};

export default PkList;
