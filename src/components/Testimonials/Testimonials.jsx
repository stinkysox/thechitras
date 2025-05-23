import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    feedback:
      "Absolutely thrilled with the results! The Chitras by Satyam Ray delivered way beyond what we imagined. Truly cinematic and heartfelt moments captured perfectly.",
  },
  {
    name: "Diya Sharma",
    feedback:
      "Thank you for making our pre-wedding shoot magical! Every frame felt like a fairytale. The warmth and passion of the team really shine through.",
  },
  {
    name: "Rohan Verma",
    feedback:
      "Satyam Ray and team were incredible from start to finish. They made us feel so comfortable and the final photos are just breathtaking. Couldn’t have asked for better!",
  },
  {
    name: "Sneha Iyer",
    feedback:
      "Each picture tells a story — full of emotion, color, and light. The Chitras has an eye for detail that turns moments into timeless memories. Highly recommended!",
  },
  {
    name: "Nikhil Rao",
    feedback:
      "From planning to execution, everything was top-notch. The Chitras by Satyam Ray gave us memories that we will cherish forever. Beautiful work and amazing energy!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>
        What our customers say
        <br />
        about us
      </h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <p className="feedback">{t.feedback}</p>
            <p className="name">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
