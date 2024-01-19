import React from "react";
import CelestialChronicles from "../assets/CelestialChronicles.png";
import ResponsiveDesign from "../assets/ResponsiveDesign.png";
import PortfolioWebsite from "../assets/PortfolioWebsite.png";

function Projects() {
  return (
    <section id="portfolio" class="p-5">
      <div class="container">
        <h2 class="text-center p-4"> Recent Projects</h2>
        <div class="row text-center g-4">
          <div class="col-md">
            <div class="card bg-dark text-light projectCard1">
              <img
                src={CelestialChronicles}
                class="w-100 card1-img"
                alt="This is an image of my first project, which was a refactoring work for a marketing company called Horiseon - The image is showing their landing page"
              />
              <div class="card-body text-center">
                <h4 id="startCardTitle" class="card-title mb-3">
                  Web Applications
                </h4>
                <p class="card-text1">
                  As a web developer, I create full scale web applications that
                  can retain and grow your userbase.
                </p>
                <a
                  href="https://github.com/EXG13/CelestialChronicles"
                  target="_blank"
                  class="btn btn-primary btn1">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light projectCard2">
              <img
                src={ResponsiveDesign}
                class="w-100 card2-img"
                alt="This is an image of my third project, which is my personal portfolio website you are currently viewing - It was done using HTML, CSS and Bootstrap"
              />
              <div class="card-body text-center">
                <h4 id="middleCardTitle" class="card-title mb-3">
                  Functionality & Responsive Design
                </h4>
                <p class="card-text2">
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
            <div class="card bg-dark text-light projectCard3">
              <img
                src={PortfolioWebsite}
                class="w-100 card3-img"
                alt="This is an image of my second project, which is my personal portfolio - It was done using only HTML and CSS"
              />
              <div class="card-body text-center">
                <h4 id="endCardTitle" class="card-title mb-3">
                  Portfolio Websites
                </h4>
                <p class="card-text3">
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

export default Projects;
