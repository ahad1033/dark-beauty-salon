import React from "react";
import slideOne from "../../../assets/images/slider/slide-1.jpg";
import slideTwo from "../../../assets/images/slider/slide-2.jpg";
import slideThree from "../../../assets/images/slider/slide-3.jpg";

const HomeBanner = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ height: '650px' }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slideOne} className="d-block w-100 custom-style" alt="..."  style={{ height: '650px', objectFit: 'cover' }}/>
        </div>
        <div className="carousel-item">
          <img src={slideTwo} className="d-block w-100 custom-style" alt="..."  style={{ height: '650px', objectFit: 'cover' }}/>
        </div>
        <div className="carousel-item">
          <img src={slideThree} className="d-block w-100 custom-style" alt="..."  style={{ height: '650px', objectFit: 'cover' }}/>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeBanner;
