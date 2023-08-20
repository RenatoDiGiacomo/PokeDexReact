import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyles";
import RoutesData from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <RoutesData />
    </BrowserRouter>
  </React.StrictMode>
);
