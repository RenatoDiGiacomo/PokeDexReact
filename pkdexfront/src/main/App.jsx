import "./App.scss";
import Pokedex from "pokedex-promise-v2";
import React from "react";

function App() {
  const [data, setData] = React.useState(null);
  const [pkData, setPkData] = React.useState(null);

  const i = new Pokedex();
  console.log(i);

  function handleClick(e) {
    setPkData(e.target.innerText);
  }

  React.useEffect(() => {
    const p = new Pokedex();
    p.getGenerationByName("generation-i")
      .then((res) => {
        setData(res.pokemon_species);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    const p = new Pokedex();
    p.getPokedexByName(pkData)
      .then((res) => {
        console.log(res.descriptions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pkData]);

  return (
    <div className="App">
      <ul onClick={handleClick}>
        {data && data.map((pk) => <li>{pk.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
