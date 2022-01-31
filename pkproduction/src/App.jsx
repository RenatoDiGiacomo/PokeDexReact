import React from "react";
import "./css/App.css";

function App() {
  const [dados, setDados] = React.useState(null);

  async function getData() {
    const recever = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const json = await recever.json();
    return setDados(json);
  }

  async function next() {
    const recever = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const json = await recever.json();
    return setDados(json.next);
  }
  // async function getData() {
  //   const recever = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  //   const json = await recever.json();
  //   return setDados(json);
  // }
  
  return (
    <div className="App">
      <button onClick={getData}>aqui</button>
      <ul>
        {dados &&
          dados.results.map((item) => <li key={item.name}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
