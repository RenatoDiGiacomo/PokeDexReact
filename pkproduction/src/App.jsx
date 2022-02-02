import React from "react";
import "./css/App.css";
import PkList from './Base/PkList'


function App() {
  const url = "https://pokeapi.co/api/v2/"
  const [menu, setMenu] = React.useState(null);
  const [select, setSelect] = React.useState(null);

  async function menuList() {
    const resp = await fetch(url);
    const data = await resp.json();
    setMenu(data);
  }
  React.useEffect(menuList, []);




 
  return <div className="App">
    <PkList menu={menu} click="aqui"/>
  </div>;
}

export default App;
