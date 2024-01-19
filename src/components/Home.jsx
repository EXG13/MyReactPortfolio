import React from "react";
import HeroIMG from "../assets/myPhoto.jpg";

function Home() {
  return (
    <section className="bg-dark text-light p-5 text-center text-sm-start custom-hero-section">
      <div className="container">
        <div className="d-md-flex align-items-center justify-content-evenly custom-hero-info">
          <div className="hero-header">
            <h1> Hi, I'm Tom</h1>
            <p className="lead my-4"> FullStack Developer</p>
            <a href="/contact">
              <button className="btn btn-primary btn-lg">HIRE ME</button>
            </a>
            <div className="hero-icons mt-5">
              <a href="https://twitter.com/FiatBurnerr" target="_blank">
                <i id="tw" className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/tomerjlind/" target="_blank">
                <i id="li" className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/EXG13" target="_blank">
                <i id="gh" className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <img
            className="img-fluid w-25 mt-5"
            src={HeroIMG}
            alt="A selfie photo of me with my dog where im smiling and the dog is looking at me. Its a doberman female and her name is Gerda"></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
