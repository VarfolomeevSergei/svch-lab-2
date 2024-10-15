// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './components/header/header'; // Убедитесь, что путь правильный
import Main from './components/Main/main'
import Footer from './components/footer/footer'
import About from "./components/about/about";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about_us" element={<About />} />
      </Routes>
      {/* <Main/> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;