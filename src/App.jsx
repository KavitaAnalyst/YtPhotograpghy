// src/App.js
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Animals from "./pages/Animals";
// import Birds from "./pages/Birds";
// import Nature from "./pages/Nature"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/animals" element={<Animals />} />
        {/* <Route path="/birds" element={<Birds />} /> */}
        {/* <Route path="/nature" element={<Nature />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
