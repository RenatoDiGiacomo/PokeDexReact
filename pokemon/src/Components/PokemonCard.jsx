import React from "react";
import axios from "axios";

const PokemonCard = ({ url }) => {
    const [pkdata, setPkdata] = React.useState(null);

    React.useEffect(() => {
        axios
            .get(url)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                setPkdata({
                    name: data.name,
                    img: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    att: data.stats[1].base_stat,
                    def: data.stats[2].base_stat,
                    satt: data.stats[3].base_stat,
                    sdef: data.stats[4].base_stat,
                    spd: data.stats[5].base_stat,
                    type1: data.types[0].type.name,
                    type2: data.types[1]?.type.name,
                });
            });
    }, [url]);

    if (!pkdata) return null;
    return (
        
            <div className="cards">
                <div className="cardImg">
                    <img src={pkdata.img} alt="" />
                </div>
                <div className="cardName">
                    <h2>{pkdata.name}</h2>
                    <p>{pkdata.type1}</p>
                    <p>{pkdata.type2}</p>
                </div>
            </div>
       
    );
};

export default PokemonCard;
