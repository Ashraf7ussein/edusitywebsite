import React from "react";
import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "214a594d-9ad5-44eb-9604-5d9124f665ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="Contact us" className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message_icon} alt="" />{" "}
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
          corrupti quam! Expedita, sequi laudantium perferendis omnis libero
          itaque quidem magnam nulla sint necessitatibus dignissimos?
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Contact@edusity.edu
          </li>
          <li>
            <img src={phone_icon} alt="" /> +1 111-111-1111
          </li>
          <li>
            <img src={location_icon} alt="" /> 77 massachusetts ave, usa
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            required
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            id="phone"
            required
          />
          <label> write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} />
          </button>
        </form>
        <span className="sending">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
