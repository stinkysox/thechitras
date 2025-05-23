import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate(); // Create navigate function

  const handleBookNowClick = () => {
    navigate("/form"); // Navigate to the /form route
  };

  const handleLearnMoreClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      // Smooth scroll to the section with id 'services'
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner">
      <p className="banner-text">
        The Chitras by Satyam Ray — <strong>Make Your Moments Special</strong>.
        We craft visual poetry from your most cherished memories. Every glance,
        every smile, every quiet emotion — captured with care and artistic
        intent. Whether it’s an intimate ceremony or a grand celebration, we’re
        there to tell your story with authenticity, grace, and timeless style.
        Let us preserve the magic of your day, wherever it unfolds.
      </p>

      <div className="banner-button-container">
        <button onClick={handleBookNowClick}>Book Now</button>
        <button onClick={handleLearnMoreClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
