import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import List from '../Pages/List';


export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>
  )
}

