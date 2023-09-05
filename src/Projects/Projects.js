import React from "react";
import "./Projects.css";
import fash from "../Projects/fash landing page.png";
import wnews from "../Projects/news landing page.png";

function Projects() {
  return (
    <div id="projects">
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-wrapper">
        <div className="projects-row">
          <div className="projects-left">
            <img src={fash} alt="" className="project-img" />
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
              <a href="https://fash-store.vercel.app/">
                <button>View Website</button>
              </a>
              <a href="https://github.com/sree-shp/Fash">
                <button>View Code</button>
              </a>
            </div>
          </div>
        </div>
        <div className="projects-row">
          <div className="projects-left">
            <img src={wnews} alt="" class="project-img" />
          </div>
          <div className="projects-right">
            <h3 class="project-title">W-NEWS LANDING PAGE</h3>
            <p className="projects-description">
              W-News is a clean, attractive and easy to use news website that is
              responsive and built using Bootstrap.
            </p>
            <div className="button-container">
              <a href="https://w-news-home.netlify.app/">
                <button>View Website</button>
              </a>
              <a href="https://github.com/sree-shp/w-news">
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
