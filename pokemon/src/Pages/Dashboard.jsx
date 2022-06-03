import React from "react";

import Oak from "../Assets/img/oak.png";

const Dashboard = () => {
    return (
        <div id="dashboard">
            <div className="intro">
                <h1>Bem Vindo a Pokedex Universalis</h1>
                <p>
                    Me chamo Professor Carvalho, <br /> Aqui Você poderá ver todas as informações sobre Pokemon
                </p>
                <p>
                    Com as informações colhidas do{" "}
                    <a href="https://pokeapi.co/docs/v2" target="_blank" rel="noreferrer">
                        Pokemon API Versão 2
                    </a>
                    , com isso, podemos ter bastante informações sobre eles, como abilidades, evoluções, etc...
                </p>
                <br />
                <p>
                    Aqui do meu lado direito, é o <strong>Menu de navegação</strong> Clique na seta para abri-lo
                </p>
                <br />
                <br />
                <p>
                    Lembrando que a página ainda está em desenvolvimento, Então caso encontre algum erro, entre em
                    contato com o criador da página, localizada no nome dele no <strong>Rodapé</strong>
                </p>
            </div>
            <div className="oak">
                <img src={Oak} alt="" />
            </div>
        </div>
    );
};

export default Dashboard;
