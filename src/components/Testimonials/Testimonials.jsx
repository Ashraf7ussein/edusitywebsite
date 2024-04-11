import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const sliderRef = useRef();
  let translateX = 0;

  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 25;
    }
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
  };

  const slideBackward = () => {
    if (translateX < 0) {
      translateX += 25;
    }
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <div className="testimonials" id="Testimonials">
      <img className="next-btn" src={next_icon} alt="" onClick={slideForward} />
      <img
        className="back-btn"
        src={back_icon}
        alt=""
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={sliderRef}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt aperiam quia nulla earum. Itaque, inventore!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt aperiam quia nulla earum. Itaque, inventore!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt aperiam quia nulla earum. Itaque, inventore!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt aperiam quia nulla earum. Itaque, inventore!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
