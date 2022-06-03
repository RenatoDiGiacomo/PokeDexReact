import React from "react";
import axios from "axios";
import { PkDataPokemon } from "../Model/PkData";

import Pagination from "../Components/Pagination";
import PokemonCard from "../Components/PokemonCard";

const Pokemon = () => {
    const [pokemon, setPokemon] = React.useState([]);
    const [url, seturl] = React.useState(PkDataPokemon);
    const [next, setNext] = React.useState();
    const [previous, setPrevious] = React.useState();

    React.useEffect(() => {
        axios.get(url).then((res) => {
            setNext(res.data.next);
            setPrevious(res.data.previous);
            setPokemon(res.data.results);
        });
    }, [url]);
    return (
        <>
            <div className="cardList">
                {pokemon && pokemon.map((pk, index) => <PokemonCard key={index} url={pk.url} />)}
            </div>
            <Pagination next={next} previous={previous} seturl={seturl} />
        </>
    );
};

export default Pokemon;
