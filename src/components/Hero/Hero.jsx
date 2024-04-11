import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1 className="hero__title">
          We ensure better education for a better world
        </h1>
        <p className="hero__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          pariatur at aut esse dolorum, sed modi nobis, fugit in labore vero
          quos facilis possimus magni quaerat consequuntur. Molestias,
          repudiandae repellat.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
