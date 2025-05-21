import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Students from "./pages/Students";
import { Routes, Route } from "react-router-dom";
import FruitsPage from "./pages/FruitsPage";
const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<FruitsPage />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/Fruits" element={<FruitsPage />} /> 
        </Routes>
      </div>
    </>
  );
};

export default App;
