import React from "react";
import CelestialChronicles from "../assets/CelestialChronicles.png";
import ResponsiveDesign from "../assets/ResponsiveDesign.png";
import PortfolioWebsite from "../assets/PortfolioWebsite.png";
import Pikachu from "../projects.json";

function Projects() {
  return (
    <section id="portfolio" className="p-5">
      <div className="container projects">
        <h2 className="text-center p-4"> Recent Projects</h2>
        <div className="row text-center g-4">
          {Pikachu.map((props) => {
            return (
              <div className="col-md">
                <div className="card bg-dark text-light projectCard1">
                  <img
                    src={props.image}
                    className="w-100 card1-img"
                    alt="This is an image of my first project, which was a refactoring work for a marketing company called Horiseon - The image is showing their landing page"
                  />
                  <div className="card-body text-center">
                    <h4 id="startCardTitle" className="card-title mb-3">
                      {props.title}
                    </h4>
                    <p className="card-text1">{props.description}</p>
                    <a
                      href={props.link}
                      target="_blank"
                      className="btn btn-primary btn1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
