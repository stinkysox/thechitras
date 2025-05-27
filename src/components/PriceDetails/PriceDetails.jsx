import React from "react";
import "./PriceDetails.css";

const PriceDetails = () => {
  const packages = [
    {
      title: "Standard Package (Photography and FHD Videography)",
      type: "standard",
      services: [
        "Coverage of Wedding Day",
        "Coverage of Reception/Mehendi Sangeet",
      ],
      outputs: ["Album (150 Photos)", "Traditional Video Output (60 Min)"],
      pricing: {
        singleSide: "₹90,000",
        bothSides: "₹1,70,000",
      },
      complementary: "Engagement Photoshoot",
      note: "Excluding Transportation and Accommodation",
    },
    {
      title: "Premium Package (Photography and Cinematography)",
      type: "premium",
      services: [
        "Coverage of Wedding Day",
        "Coverage of Reception/Mehendi Sangeet",
      ],
      outputs: [
        "Premium Album (250 Photos)",
        "Wedding Film (30 Min)",
        "Trailer (5 Mins)",
        "Teaser Up To 1 Min",
        "Instagram Reels",
        "Edited Photos",
      ],
      pricing: {
        singleSide: "₹2,10,000",
        bothSides: "₹3,50,000",
      },
      complementary: "Engagement Photoshoot",
      note: "Excluding Transportation and Accommodation",
    },
    {
      title: "Luxury Package (4K Edition)",
      type: "luxury",
      services: [
        "Coverage of Wedding Day",
        "Coverage of Reception/Mehendi Sangeet",
      ],
      outputs: [
        "Standard Album (200 Photos)",
        "Cinematic Film (60 Min)",
        "Teaser Up To 3 Mins",
        "Instagram Reels",
        "Edited Photos",
      ],
      pricing: {
        singleSide: "₹1,60,000",
        bothSides: "₹2,80,000",
      },
      complementary: "Engagement Photoshoot",
      note: "Excluding Transportation and Accommodation",
    },
  ];

  const additionalServices = [
    {
      category: "Pre Wedding",
      services: [
        {
          name: "Photoshoot",
          outputs: ["Album", "Edited Photos"],
          price: "₹25,000/Day",
          extension: "₹10,000/Day if extended for another day",
        },
        {
          name: "Photography and Cinematography",
          outputs: ["Album", "Video up to 3 Mins", "Edited Photos"],
          price: "₹45,000/Day",
          extension: "₹15,000/Day if extended for another day",
        },
      ],
    },
    {
      category: "Engagement",
      services: [
        {
          name: "Photoshoot",
          outputs: ["Album", "Edited Photos"],
          price: "₹25,000/Day",
          extension: null,
        },
        {
          name: "Photography and Cinematography",
          outputs: [
            "Teaser up to 3 Mins",
            "Cinematic Long Video up to 15 Mins",
            "Edited Photos",
          ],
          price: "₹50,000/Day",
          extension: null,
        },
      ],
    },
  ];

  return (
    <div className="price-details-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="header">
          <h1 className="header-title">Wedding Photography Packages</h1>
          <p className="header-subtitle">
            Capturing your special moments with professional excellence
          </p>
        </div>

        {/* Main Packages */}
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.type}`}>
              {pkg.type === "premium" && (
                <div className="premium-badge">PREMIUM</div>
              )}
              {pkg.type === "luxury" && (
                <div className="premium-badge">LUXURY</div>
              )}

              <h2 className="package-title">{pkg.title}</h2>

              <div className="services-section">
                <h3 className="section-title">Services Included</h3>
                {pkg.services.map((service, idx) => (
                  <div key={idx} className="service-item">
                    {service}
                  </div>
                ))}
              </div>

              <div className="outputs-section">
                <h3 className="section-title">Outputs</h3>
                <div className="outputs-grid">
                  {pkg.outputs.map((output, idx) => (
                    <div key={idx} className="output-item">
                      ✓ {output}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pricing-section">
                <div className="pricing-row">
                  <span className="pricing-label">Single Side:</span>
                  <span className="price single-price">
                    {pkg.pricing.singleSide}
                  </span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-label">Both Sides:</span>
                  <span className="price both-price">
                    {pkg.pricing.bothSides}
                  </span>
                </div>
              </div>

              <div className="complementary-section">
                <span className="complementary-text">
                  ★ Complementary: {pkg.complementary}
                </span>
              </div>

              <div className="note-text">*{pkg.note}</div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="additional-services">
          <h2 className="additional-services-title">Additional Services</h2>

          <div className="categories-grid">
            {additionalServices.map((category, catIndex) => (
              <div key={catIndex} className="category-card">
                <h3 className="category-title">{category.category}</h3>

                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-card">
                    <h4 className="service-name">• {service.name}</h4>

                    <div className="service-outputs">
                      <strong className="outputs-label">Outputs:</strong>
                      <div className="outputs-tags">
                        {service.outputs.map((output, outIndex) => (
                          <span key={outIndex} className="output-tag">
                            {output}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="service-pricing">
                      <span className="service-price">{service.price}</span>
                    </div>

                    {service.extension && (
                      <div className="extension-info">
                        Extension: {service.extension}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">
            Ready to capture your special day? Contact us to discuss your
            requirements!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
