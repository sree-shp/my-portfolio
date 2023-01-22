import React from "react";
import "./Projects.css";
import amazon from "../Projects/amazon-clone.png";
import news from "../Projects/news landing page.png";
import subscription from "../Projects/subscription form.png";
import todo from "../Projects/to-do-list.png";

function Projects() {
  return (
    <div id="projects">
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-wrapper">
        <div className="projects-column">
          <img src={amazon} alt="" className="project-img" />
          <h3 className="project-title">AMAZON CLONE</h3>
        </div>
        <div className="projects-column">
          <img src={news} alt="" className="project-img" />
          <h3 className="project-title">NEWS LANDING PAGE</h3>
        </div>
        <div className="projects-column">
          <img src={subscription} alt="" className="project-img" />
          <h3 className="project-title">SUBSCRIPTION FORM</h3>
        </div>
        <div className="projects-column">
          <img src={todo} alt="" class="project-img" />
          <h3 class="project-title">TO-DO LIST</h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;
