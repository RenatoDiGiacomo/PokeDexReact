import { styled } from "styled-components";
import pkball from "../../../Assets/Img/pokeballmini.svg";

const PokeRegionContainerStyled = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const PokeRegionTopStyled = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 0.5rem;
`;
const PokeRegionTitleStyled = styled("h1")`
  width: 100%;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
`;
const PokeRegionBackBtnStyled = styled("button")`
  cursor: pointer;
  font-family: PkText;
  display: flex;
  border: #00000066;
  padding: 0.5rem 1rem;
  background-color: #00000066;
  color: white;
  border-radius: 6px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: white;
    color: #00000066;
    border: white;
    transition: all 0.3s ease-in;
  }
`;
const PokeRegionSelectContainerStyled = styled("div")`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  gap: 12px;
`;
const PokeRegionSelectUlStyled = styled("ul")`
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 250px;
  height: 100vh;
  background: linear-gradient(to bottom right, lightgray, gray, darkgray);
  border: 1px solid black;
`;
const PokeRegionSelectLiStyled = styled("li")`
  cursor: pointer;
  font-size: 14px;
  text-transform: capitalize;
  color: white;
  padding: 4px 4px;
  background-color: #00000066;
  border-radius: 0 20px 20px 0;
  width: 75%;
  background-image: url(${pkball});
  background-repeat: no-repeat;
  background-position: 95%;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #000000a3;
    width: 90%;
  }
`;
const PokeRegionSelectBoxStyled = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const PokeRegionInputBoxStyled = styled("div")`
  width: 100%;
  display: flex;
  background-color: #00000066;
  /* border: 2px solid black; */
`;
const PokeRegionInputStyled = styled("input")`
  font-family: PkText;
  display: flex;
  flex-grow: 2;
  padding: 6px;
  border: 0.5px solid black;
  background-color: #dadada;
  &:focus {
    background-color: #fff;
    outline: none;
  }
`;
const PokeRegionBtnStyled = styled("button")`
  cursor: pointer;
  font-family: PkText;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  border: #00000066;
  background-color: #00000066;
  color: white;
  border-radius: 6px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: white;
    color: #00000066;
    border: white;
    transition: all 0.3s ease-in;
  }
  flex-grow: 1;
`;

export {
  PokeRegionContainerStyled,
  PokeRegionTopStyled,
  PokeRegionTitleStyled,
  PokeRegionBackBtnStyled,
  PokeRegionSelectContainerStyled,
  PokeRegionSelectUlStyled,
  PokeRegionSelectLiStyled,
  PokeRegionSelectBoxStyled,
  PokeRegionInputBoxStyled,
  PokeRegionInputStyled,
  PokeRegionBtnStyled,
};
