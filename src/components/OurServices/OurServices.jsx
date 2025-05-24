import React, { useState } from "react";
import { motion } from "framer-motion";
import "./OurServices.css";
import StatsCounter from "../StatsCounter/StatsCounter";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const services = [
  {
    title: "Wedding Photography",
    image: "https://i.postimg.cc/XYjfckd9/DSC01372.jpg",
  },
  {
    title: "Pre-wedding Photography",
    image: "https://i.postimg.cc/pT6L680G/DSC09283.jpg",
  },
  {
    title: "Engagement Photography",
    image: "https://i.postimg.cc/zvxMDG1Q/DSC01257.jpg",
  },
  {
    title: "Baby Shoot",
    image:
      "https://i.pinimg.com/736x/47/3d/56/473d565e39596766d50e37e4c689abd2.jpg",
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <>
      <StatsCounter />
      <div className="services__container" id="services">
        <p className="services__subheading">OUR SERVICES</p>
        <h2 className="services__heading">
          Where every <span>picture</span> <br /> tells a story
        </h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              className="services__card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.title}
                onClick={() => toggleZoom(index)}
                className={
                  zoomedIndex === index
                    ? "services__img zoomed"
                    : "services__img"
                }
              />
              <p className="services__title">{service.title}</p>
            </motion.div>
          ))}
        </div>
        <button onClick={() => navigate("/gallery")} className="visit-gallery">
          Visit Gallery
        </button>
      </div>
    </>
  );
};

export default OurServices;
