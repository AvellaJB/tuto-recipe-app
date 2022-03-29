//Pages va contenir toutes les pages.(Home, Searched etc...)
import Cuisine from "./Cuisine";
import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
