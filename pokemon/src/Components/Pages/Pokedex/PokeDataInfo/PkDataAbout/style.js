import { styled } from "styled-components";

const PkDataAboutContainerStyled = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 21px;
`;
const PkDataAboutBoxStyled = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PkDataAboutContentTitleStyled = styled("h3")`
  font-size: 24px;
`;

const PkDataAboutContentTextStyled = styled("p")``;
const PkDataAboutContentSubTitleBoxStyled = styled("span")`
  width: 100%;
  text-transform: capitalize;
`;

const PkDataAboutSelectStyled = styled("select")`
  display: flex;
  padding: 0.5rem 0;
  border: none;
  /* border-bottom: 1px solid black; */
  font-size: 21px;
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
`;
const PkDataAboutOptionStyled = styled("option")`
  font-size: 21px;
  padding: 0.5rem 0;
`;

export {
  PkDataAboutContainerStyled,
  PkDataAboutBoxStyled,
  PkDataAboutContentTitleStyled,
  PkDataAboutContentSubTitleBoxStyled,
  PkDataAboutContentTextStyled,
  PkDataAboutSelectStyled,
  PkDataAboutOptionStyled,
};
