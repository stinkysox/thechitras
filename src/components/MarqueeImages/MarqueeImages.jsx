import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/dQ6Y3qsn/DSC-3136.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/fbcPPKk5/DSC00696.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/W3syckkV/DSC00716.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/XYwxNv3Y/DSC04182.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/MHCbxCFB/DSC-6840.jpg",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/bv1XhPVx/ABD-8916.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/d1SjNkR4/DSC-6985.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/XvjPT5Fb/DSC-6451.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/t45Stgcm/DSC-5303.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/85CbbBv7/DSC03857.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
