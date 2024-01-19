import React from "react";
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
                <div className="card bg-dark text-light">
                  <img
                    src={props.image}
                    className="w-100"
                    alt={props.alt}
                  />
                  <div className="card-body text-center">
                    <h4 id="startCardTitle" className="card-title mb-3">
                      {props.title}
                    </h4>
                    <p className="card-text1">{props.description}</p>
                    <a
                      href={props.link}
                      target="_blank"
                      className="btn btn-primary">
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
