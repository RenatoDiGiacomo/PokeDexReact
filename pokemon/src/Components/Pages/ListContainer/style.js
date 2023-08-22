import styled from "styled-components";

const PkContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const PkCardsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  flex-direction: row;
  gap: 12px;
`;
const PkBtnContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PkBtnStyled = styled.button`
  font-family: PkText;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-size: 14px;
  background-color: #dedede;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 2px gray;
  transition: all 0.1s linear;
  & svg {
    fill: black;
  }
  &:hover {
    box-shadow: 2px 2px 2px 0px gray;
    transition: all 0.1s linear;
  }
  &:disabled {
    cursor: ${(props) => (props.$exist ? "pointer" : "not-allowed")};
    color: ${(props) => (props.$exist ? "black" : "white")};
    opacity: ${(props) => (props.$exist ? "1" : ".5")};
    & svg {
      fill: white;
    }
  }
`;

export {
  PkContainerStyled,
  PkCardsContainerStyled,
  PkBtnContainerStyled,
  PkBtnStyled,
};
