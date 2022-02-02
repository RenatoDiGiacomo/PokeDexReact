import React from "react";
import "./css/App.css";
import PkList from "./Base/PkList";

function App() {
  const url = "https://pokeapi.co/api/v2/";
  const [menu, setMenu] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  const [page, setPage] = React.useState(null);

  async function menuList() {
    const resp = await fetch(url);
    const data = await resp.json();
    setMenu(data);
  }

  async function selectItem() {
    if (selected) {
      const respo = await fetch(selected);
      const data = await respo.json();
      setPage(data);
    }
  }

  React.useEffect(menuList, []);

  React.useEffect(selectItem, [selected]);
  return (
    <>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <ul>
            {menu &&
              Object.entries(menu).map((item) => (
                <li key={item[1]} onClick={() => setSelected(item[1])}>
                  {item[0]}
                </li>
              ))}
          </ul>
        </div>
        <div>{page && page.count}</div>
      </section>
    </>
  );
}

export default App;
