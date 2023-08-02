import React from 'react'
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./Routes";

import Header from "./Components/Header"
import Content from './Components/Content'
import Footer from "./Components/Footer"
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RouterComponent />
      <Content />
      <Footer />
    </BrowserRouter>
  )
}

export default App