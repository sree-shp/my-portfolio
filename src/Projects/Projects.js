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
        <div className="projects-row">
          <div className="projects-left">
            <img src={amazon} alt="" className="project-img" />
          </div>
          <div className="projects-right">
            <h3 className="project-title">FASH - CLOTHING STORE</h3>
            <p className="projects-description">
              Clothing store website that aims to provide its customers with an
              interactive UI and better user experience. It features an
              easy-to-navigate layout, allowing users to view the products they
              want to buy or browse through the categories.
            </p>
            <div className="button-container">
              <a href="/">
                <button>View Website</button>
              </a>
              <a href="/">
                <button>View Code</button>
              </a>
            </div>
          </div>
        </div>
        <div className="projects-row">
          <div className="projects-left">
            <img src={todo} alt="" class="project-img" />
          </div>
          <div className="projects-right">
            <h3 class="project-title">TO-DO LIST</h3>
            <p className="projects-description">
              Allows users to enter new tasks, delete old tasks and strike off
              the finished tasks. The user interface is simple, but it is easy
              to use and efficient. Also allows to create multiple category
              based to-do-lists.
            </p>
            <div className="button-container">
              <a href="/">
                <button>View Website</button>
              </a>
              <a href="/">
                <button>View Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
