import React from "react";
import axios from "axios";
import PkList from "./Components/PkList";

function App() {
    const [pokemon, setPokemon] = React.useState([]);
    const [currentUrl, setCurrentUrl] = React.useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setNextUrl] = React.useState("");
    const [prevUrl, setPrevUrl] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        axios
            .get(currentUrl)
            .then((res) => {
                const response = res.data;
                const data = response.results;
                setPokemon(data)
                setNextUrl(response.next);
                setPrevUrl(response.previous);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
            });
    }, [nextUrl, prevUrl, currentUrl]);
    if (error) return <h1>erro</h1>;
    if (loading) return <h1>Loading...</h1>;
    console.log(pokemon);
    return (
        <>
            <h1>PokeDex Universal</h1>
            {pokemon && pokemon.map((pk,index) => (
                <PkList key={index} url={pk.url}/>
            ))}
            <div>
                {prevUrl && <button onClick={() => setCurrentUrl(prevUrl)}>back</button>}
                {nextUrl && <button onClick={() => setCurrentUrl(nextUrl)}>next</button>}
            </div>
        </>
    );
}

export default App;

