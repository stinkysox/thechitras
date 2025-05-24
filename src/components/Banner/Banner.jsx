import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/form");
  };

  const handleLearnMoreClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner-wrapper">
      <div className="banner">
        <p className="banner-text">
          The Chitras is a photography company that has been dedicated to
          capturing the essence of love and creating lasting memories for
          couples since 2017.
          <br />
          <br />
          With a strong focus on wedding photography, we specialize in
          documenting the most cherished moments of a couple’s journey — from
          intimate glances and heartfelt vows to joyful celebrations and
          everything in between.
          <br />
          <br />
          Our talented crew is made up of passionate individuals who genuinely
          love what they do, and that passion is reflected in every frame we
          capture.
          <br />
          <br />
          We believe that every love story is unique, and our mission is to
          preserve those stories with authenticity, creativity, and care.
          <br />
          <br />
          At The Chitras, we don’t just take pictures — we create visual
          narratives that allow couples to relive their special day for years to
          come.
          <br />
          <br />
          Whether it’s a grand wedding or a quiet ceremony, we approach each
          project with the same level of dedication and attention to detail,
          ensuring that your memories are not only documented, but also
          beautifully immortalized.
        </p>
      </div>
      <div className="photo-college-one">
        <div className="top-image">
          <img
            src="https://i.postimg.cc/vTf9SdbK/IMG-9904.jpg"
            alt="Top wedding photo"
          />
        </div>
        <div className="bottom-images">
          <img
            src="https://i.postimg.cc/2SzvTJJH/IMG-6138.jpg"
            alt="Left bridal portrait"
          />
          <img
            src="https://i.postimg.cc/RhdC0PRF/IMG-9918.jpg"
            alt="Right bridal moment"
          />
        </div>
        <div className="banner-button-container">
          <button onClick={handleBookNowClick}>Book Now</button>
          <button onClick={handleLearnMoreClick}>Learn More</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Banner;
