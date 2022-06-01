import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Dashboard from "./Dashboard";

const Home = () => {
    return (
        <>
            <Header />
            <Dashboard />
            <Footer />
            <Menu />
        </>
    );
};

export default Home;
