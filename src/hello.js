import React from "react";
// const pet1 = "https://via.placeholder.com/1500x600/bae6fd/0a0a0a?text=Pet+1";
// const pet2 = "https://via.placeholder.com/1500x600/ffc6c6/0a0a0a?text=Pet+2";
// const pet3 = "https://via.placeholder.com/1500x600/d9f99d/0a0a0a?text=Pet+3";
import img from './first.jpg'


function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img}
            className="d-block w-100"
            alt="Pet 1"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Welcome to Drodo</h1>
            <p className="lead">Your Pet, Your Friend.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={img}
            className="d-block w-100"
            alt="Pet 2"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Buy or Adopt</h1>
            <p className="lead">Safe and Trusted for Families</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={img}
            className="d-block w-100"
            alt="Pet 3"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Find Your Perfect Match</h1>
            <p className="lead">Join 10k+ Happy Pet Owners</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}

export default HeroCarousel;
