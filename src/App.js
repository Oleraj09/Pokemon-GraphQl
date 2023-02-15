import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/pokemon" element={<Single/>} />
      </Routes>
    </div>
  );
}

export default App;
