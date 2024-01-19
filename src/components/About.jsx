import React from "react";
import aboutIMG from "../assets/think.jpg";

function About() {
  return (
    <section id="about" className="p-5 ms-5">
      <div className="container me-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2 id="about" className="text-center">
              About
            </h2>
            <p className="lead">
              I'm an enthusiastic learner with a strong foundation in Web2
              technologies. I've completed a comprehensive Front End web
              development bootcamp, gaining proficiency in HTML, CSS, Bootstrap,
              JavaScript, jQuery, and React. Additionally, I'm well-versed in
              MySQL and WordPress, enabling me to create and customize websites
              effectively. My journey also encompasses the exciting world of
              Web3, with a growing interest in Solidity and Plutus smart
              contracts. I'm eager to bridge the gap between the traditional and
              blockchain worlds, contributing to both Web2 and Web3 advancements
              in the ever-evolving tech landscape.
            </p>
          </div>
          <div className="col-md">
            <img src={aboutIMG} className="img-fluid w-50 ms-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
