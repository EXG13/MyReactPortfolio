import React from "react";
import Horiseon from "../assets/Horiseon.png";
import ResponsiveDesign from "../assets/ResponsiveDesign2.png";
import PortfolioWebsite from "../assets/PortfolioWebsite.png";

function Portfolio() {
  return (
    <section id="portfolio" class="p-5">
      <div class="container">
        <h2 class="text-center p-4"> Recent Projects</h2>
        <div class="row text-center g-4">
          <div class="col-md">
            <div class="card bg-dark text-light">
              <img
                src={Horiseon}
                class="w-100"
                alt="This is an image of my first project, which was a refactoring work for a marketing company called Horiseon - The image is showing their landing page"
              />
              <div class="card-body text-center">
                <h4 id="startCardTitle" class="card-title mb-3">
                  Code Refactoring
                </h4>
                <p class="card-text">
                  As a web developer, I enhance code quality, readability, and
                  maintainability through code refactoring techniques.
                </p>
                <a
                  href="https://github.com/EXG13/HoriseonCodeRefactor"
                  target="_blank"
                  class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <img
                src={ResponsiveDesign}
                class="w-100"
                alt="This is an image of my third project, which is my personal portfolio website you are currently viewing - It was done using HTML, CSS and Bootstrap"
              />
              <div class="card-body text-center">
                <h4 id="middleCardTitle" class="card-title mb-3">
                  Functionality & Responsive Design
                </h4>
                <p class="card-text">
                  I harness Bootstrap, JavaScript, and other frameworks in web
                  development, ensuring enhanced functionality and responsive
                  design.
                </p>
                <a
                  href="https://github.com/EXG13/PortfolioProject-Bootstrap"
                  target="_blank"
                  class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <img
                src={PortfolioWebsite}
                class="w-100"
                alt="This is an image of my second project, which is my personal portfolio - It was done using only HTML and CSS"
              />
              <div class="card-body text-center">
                <h4 id="endCardTitle" class="card-title mb-3">
                  Portfolio Websites
                </h4>
                <p class="card-text">
                  Designing personal portfolio websites to elegantly display
                  skills, experiences & personality, leaving a remarkable
                  digital footprint in seconds.
                </p>
                <a
                  href="https://tjl-portfolio-website.netlify.app/"
                  target="_blank"
                  class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
