import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Dashboard from "./Dashboard";
import Pokemon from "./Pokemon";

const App = () => {
    return (
        <>
            <Header />
            <main id="App">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Pokemon" element={<Pokemon />} />
                </Routes>
            </main>
            <Footer />
            <Menu />
        </>
    );
};

export default App;
