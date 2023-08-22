import styled from "styled-components";

const PkCardStyled = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 2px 2px 4px 4px gray;
  justify-content: center;
  transition: all 0.1s linear;

  &:hover {
    box-shadow: 2px 2px 4px 0px gray;
    transition: all 0.1s linear;
  }
`;
const PkCardTextContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;
const PkTextIdStyled = styled.p`
  position: absolute;
  font-family: PkText;
  right: 0.5rem;
  top: 0.5rem;
  font-size: 14px;
`;
const PkTextTitleStyled = styled.h2`
  text-transform: capitalize;
  font-family: PkText;
  text-align: center;
  font-size: 28px;
`;
const PkFirstImgStyled = styled.img`
  width: 150px;
  height: auto;
  align-self: center;
`;

export {
  PkCardStyled,
  PkCardTextContainerStyled,
  PkTextIdStyled,
  PkTextTitleStyled,
  PkFirstImgStyled,
};
