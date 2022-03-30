//Pages va contenir toutes les pages.(Home, Searched etc...)
import Cuisine from "./Cuisine";
import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* On met cuisine/:type pour que notre lien ne cherche pas que cuisine. Mais aussi autre chose en suite
      genre si on a american, thain ou japanese. */}
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;
