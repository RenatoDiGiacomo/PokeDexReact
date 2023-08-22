import styled from "styled-components";
import BGImage from "../../../Assets/Img/body_bg.png";

const MenuHamburgerNavSytled = styled.nav`
  position: fixed;
  width: 250px;
  transform: translateX(
    ${(props) => (props.$menunav === "true" ? "0" : "-250px")}
  );
  height: 50vh;
  background-color: #dedede;
  background-image: url(${BGImage});
  background-position: center;
  background-size: cover;
  top: 56px;
  left: 0;
  transition: all 0.2s ease-in;
`;
const MenuHamburgerUlSytled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  gap: 21px;
`;
const MenuHamburgerLiSytled = styled.li`
  position: relative;
  & a {
    font-size: 21px;
    text-decoration: none;
    color: #fafafa;
  }
  &a:before {
    content: "";
    display: block;
    background-color: #fafafa;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &:hover a:before {
    width: 100%;
  }
`;

export { MenuHamburgerNavSytled, MenuHamburgerUlSytled, MenuHamburgerLiSytled };
