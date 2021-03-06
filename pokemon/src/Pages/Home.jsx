import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

import Dashboard from "./Dashboard";
import Pokemon from "./Pokemon";

const Home = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                </Routes>
            </BrowserRouter>
            <Footer />
            <Menu />
        </>
    );
};

export default Home;
