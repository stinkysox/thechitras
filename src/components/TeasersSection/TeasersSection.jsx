import React from "react";
import "./TeasersSection.css";
import { FaYoutube } from "react-icons/fa";

const TeasersSection = () => {
  // Dummy embedded YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/S1tdS8bOMhQ",
    "https://www.youtube.com/embed/jEuhADnkegM",
    "https://www.youtube.com/embed/caA0-sKARpg",
    "https://www.youtube.com/embed/85PJcRGIzhs",
    "https://www.youtube.com/embed/tzoi9PlKqVA",
    "https://www.youtube.com/embed/-mXk1dtXDnk",
    "https://www.youtube.com/embed/XcJxJ_oPiUs",
    "https://www.youtube.com/embed/h0AQ2k83q8A",
    "https://www.youtube.com/embed/Y3YRQrXQIRM",
    "https://www.youtube.com/embed/jR9p-9yfKm8",
    "https://www.youtube.com/embed/sLETN_yQ3QA",
  ];

  return (
    <div className="teasers-section">
      <h2>Teasers</h2>

      {videos.length === 0 ? (
        <p>No videos to show</p>
      ) : (
        <div className="video-grid">
          {videos.map((src, index) => (
            <div className="video-container" key={index}>
              <iframe
                src={src}
                title={`Teaser ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      <div className="youtube-icon">
        <a
          href="https://youtube.com/@satyamray4976?si=Z-sTSj8sn2yatFPG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="glow-youtube" />
        </a>
      </div>
    </div>
  );
};

export default TeasersSection;
