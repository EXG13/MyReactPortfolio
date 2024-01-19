import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Portfolio from "./components/Projects";




function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About/>
      <Portfolio/>
    </Router>
  );
}

export default App
