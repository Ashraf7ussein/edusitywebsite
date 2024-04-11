import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="About us">
      <div className="about-left">
        <img src={about_img} className="about-img" alt="" />
        <img
          src={play_icon}
          className="play-icon"
          alt=""
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About university</h3>
        <h2>Nurturing tommorow's leaders today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          officiis itaque. Error provident exercitationem fugiat tenetur officia
          iste, sunt quibusdam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          officiis itaque. Error provident exercitationem fugiat tenetur officia
          iste, sunt quibusdam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          officiis itaque. Error provident exercitationem fugiat tenetur officia
          iste, sunt quibusdam.
        </p>
      </div>
    </div>
  );
};

export default About;
