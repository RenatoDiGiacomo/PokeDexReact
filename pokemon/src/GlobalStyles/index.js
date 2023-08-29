import { createGlobalStyle } from "styled-components";
import PkTitle from "../Assets/fonts/Pocket_Monk.otf";
import PkText from "../Assets/fonts/Flexo/Flexo-Regular.ttf";

export const GlobalStyled = createGlobalStyle`
@font-face {
  font-family: "PkTitle";
  font-weight: normal;
  src:url(${PkTitle}) format("opentype");
}
@font-face {
  font-family: "PkText";
  src: url(${PkText}) format("truetype");
}
/* CSS Reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

/* Definindo fonte e tamanho base para o corpo */
body {
  font-family: PkText, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  white-space: normal;
  overflow-x: hidden;
}

/* Removendo list-style de listas */
ol, ul {
  list-style: none;
}

/* Removendo margens e paddings padrão em blocos de texto */
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

/* Definindo box-sizing para todos os elementos */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Definindo tamanhos de fonte para H1 a H6 */
h1 {
  font-size: 42px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 30px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}

/* Outras tags de texto com tamanho 12px */
p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
  font-size: 12px;
}
`;
