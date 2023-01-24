import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Title from "../Title/Title.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contact/Contact.js";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
