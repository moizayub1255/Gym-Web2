import React from "react";
import Headfoot from "../Layout/Headfoot";

import About from "./About";
import Program from "./Program";
import Testimonial from "./Testemonial";
import Contact from "./Contact";
import Memorship from "./Memorship";
import "../index.css"

const Home = () => {
  return (
    <Headfoot>
<div id="home">
      <div
        id="carouselExampleAutoplaying "
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="gym1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="gym2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="gym3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="program">
        <Program />
      </div>
      <div id="membership">
        <Memorship/>
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Headfoot>
  );
};

export default Home;
