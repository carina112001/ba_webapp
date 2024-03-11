import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./HomePage";
import RecipePage from "./RecipePage";

function Structure() {

    const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/Rezept/:item" element={<RecipePage />} />
    </Routes>
  )
}

export default Structure
