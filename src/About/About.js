import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <h2 className="about-heading">ABOUT ME</h2>
      <div className="about-wrapper">
        <p className="about-description">
          I am a final year student at PSG Institute of Technology and Applied
          Research pursuing my Bachelor's degree in Mechanical Engineering.
          Despite my passion for computer science, I unfortunately made a small
          mistake in my choice list which led me to my current field of study.
          However, I turned this setback into an opportunity to combine my
          interests in both mechanical engineering and computer science. My
          journey into web development began with an IoT based project where I
          had to design an application to monitor electrolyte levels. This
          project sparked my curiosity in web development and I began to explore
          and learn about HTML, CSS, and JavaScript. I then dove deeper into web
          development by learning React JS. I am now determined to pursue a
          career in web development and am excited to see where this journey
          will take me
        </p>
      </div>
    </div>
  );
}

export default About;
