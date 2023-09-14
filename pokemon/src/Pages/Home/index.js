import React from "react";
import { HomeContainerStyled, HomeTitleStyled, HomeTextStyled, HomeLinkStyled } from "./style";

const Home = () => {
  return (
    <HomeContainerStyled>
      <HomeTitleStyled>Pokedex Universal</HomeTitleStyled>
      <HomeTextStyled>
        Esse projeto tem como foco, auxiliar todos Treinadores dos Jogos Principais da Saga Pokemon.
      </HomeTextStyled>
      <HomeTextStyled>
        Os dados dessa página vem do{" "}
        <HomeLinkStyled href="https://pokeapi.co/" target="_blank">
          POKÉAPI V2
        </HomeLinkStyled>
        , o qual todos os direitos de imagem é da{" "}
        <HomeLinkStyled href="https://www.nintendo.com/" target="_blank">
          Nintendo Company
        </HomeLinkStyled>
        ,{" "}
        <HomeLinkStyled href="https://www.gamefreak.co.jp/" target="_blank">
          GameFreak
        </HomeLinkStyled>{" "}
        e{" "}
        <HomeLinkStyled href="https://www.pokemon.com/" target="_blank">
          Pokemon Company
        </HomeLinkStyled>
        <br /> Esse projeto não tem nenhum fim lucrativo ou incentivo monetário.
      </HomeTextStyled>
      <HomeTextStyled>
        O foco do projeto além de auxiliar, é também um portfolio pessoal. O qual além da criação do visual, soma com a
        distribuição de dados com NodeJS.
      </HomeTextStyled>
      <HomeTextStyled>
        Projeto desenvolvido em ReactJS, com NodeJS. e está em meu Repositório pessoal, e está aberto para download e
        caso queira auxiliar no projeto, dar sugestões criticas ou elogios. Pode enviar para o meu{" "}
        <HomeLinkStyled href="mail:renato@nordiq.com.br" title="renato@nordiq.com.br">
          E-mail
        </HomeLinkStyled>{" "}
        Ou visitar meu Repositório do GitHub{" "}
        <HomeLinkStyled href="https://github.com/RenatoDiGiacomo/PokeDexReact" title="PokemonDexReact from GitHub">
          PokemonDexReact
        </HomeLinkStyled>
      </HomeTextStyled>
      <br />
      <HomeTextStyled>Obrigado a todos a compreensão</HomeTextStyled>
    </HomeContainerStyled>
  );
};

export default Home;
