import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Title from "../Title/Title.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="first-section">
        <Navbar />
        <Title />
      </div>
      <About />
      <Projects />
    </div>
  );
}

export default App;
