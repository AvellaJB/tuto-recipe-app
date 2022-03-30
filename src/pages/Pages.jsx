//Pages va contenir toutes les pages.(Home, Searched etc...)
import Cuisine from "./Cuisine";
import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* On met cuisine/:type pour que notre lien ne cherche pas que cuisine. Mais aussi autre chose en suite
      genre si on a american, thain ou japanese. */}
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
