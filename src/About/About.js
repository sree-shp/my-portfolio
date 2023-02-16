import React from "react";
import "./About.css";
import education from "../About/education_icon-removebg-preview.png";
import person from "../About/person_icon-removebg-preview.png";

function About() {
  return (
    <div id="about">
      <h2 className="about-heading">ABOUT ME</h2>
      <div className="about-wrapper">
        <div className="about-row">
          <div className="about-column">
            <img className="icon" src={person} alt="" />
          </div>
          <div className="about-column">
            <p className="about-description to-right-background">
              I'm a passionate learner, eager to learn new technologies and work
              on web development. I've been learning web development for 4
              months now, and I'm ready to take on more challenging
              responsibilities. I'm an autonomous worker who can independently
              pick up tasks and full projects, and work through them end-to-end
              with no problems. When given the opportunity, I'm also able to
              take initiative--I'm always looking for ways to improve myself and
              improve our team's processes. My goal is always focused on how our
              work will impact users; whether it's making their lives easier or
              making them laugh out loud with delight when they see something
              new!
            </p>
          </div>
        </div>
        <div className="about-row">
          <div className="about-column">
            <img className="icon" src={education} alt="" />
          </div>
          <div className="about-column">
            <p className="about-description to-left-background">
              I'm currently pursuing a bachelor's degree in mechanical
              engineering, but I always wanted to pursue a computer science
              degree, unfortunately, I couldn't get into one. Regardless of the
              setback, I did not give up on my dream and went on to learn
              various concepts and programming languages on my own. I have
              strong knowledge in the fundamentals of web development--HTML,
              CSS, and JavaScript--and am able to use these skills when working
              on projects in Mongo Gb/ Express JS/ React JS/ Node JS (MERN
              stack).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
