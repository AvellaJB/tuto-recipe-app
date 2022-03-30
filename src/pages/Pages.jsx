//Pages va contenir toutes les pages.(Home, Searched etc...)
import Cuisine from "./Cuisine";
import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  //Avec router, il faut ajoute à Route une key et une locaton pour que exitBeforeEnter fonctionne.
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* On met cuisine/:type pour que notre lien ne cherche pas que cuisine. Mais aussi autre chose en suite
      genre si on a american, thain ou japanese. */}
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
