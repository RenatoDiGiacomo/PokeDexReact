import React from "react";
import ReactDOM from "react-dom/client";

import "./sass/index.scss";

import App from "./Pages/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Pokemon from "./Pages/Pokemon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

