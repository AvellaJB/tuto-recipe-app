//Pages va contenir toutes les pages.(Home, Searched etc...)

import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Home />
    </Routes>
  );
}

export default Pages;
