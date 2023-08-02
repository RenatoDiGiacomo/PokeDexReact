import { createGlobalStyle } from "styled-components";
import Ketchum from "../Assets/fonts/Ketchum.otf";
import PkClassic from "../Assets/fonts/PkClassic.ttf";
import Roboto from "../Assets/fonts/roboto.woff2";
import RobotoBold from "../Assets/fonts/robotoB.woff2";

const ColorDefault = {
  yellow: "#FFDE00",
  gold: "#B3A125",
  blue: "#3B4CCA",
  red: "#FF0000",
  darkRed: "#CC0000",
  white: "#eeefef",
};

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;

}
/*
  Reset
*/
/*
  Font Imports
*/
@font-face{
  font-family: "Ketchum";
  src:url(${Ketchum}) format("opentype");;
  font-style: normal;
}
@font-face{
  font-family: "PkClassic";
  src: url(${PkClassic}) format("truetype"); ;
}
@font-face {
  font-family: "Roboto";
  src: url(${Roboto}) format("woff2");
}
@font-face {
  font-family: "RobotoBold";
  src: url(${RobotoBold}) format("woff2");
}

h1{
  font-family: "Ketchum";
  font-size: 46px;
  background-color: darkred;
  -webkit-text-stroke: 2px ${ColorDefault.blue};
  -webkit-background-clip: text;
  -webkit-text-fill-color:${ColorDefault.yellow};
}
p,
a,
div,
span{
  font-family: "Roboto";
  font-size: 1rem;
}

a{
  text-decoration: none;

}
/*
  Font Imports
*/

/*
  Patters Data
 */
  body{
    background-color: ${ColorDefault.white};
  }
/*
  Patters Data
 */


`;
