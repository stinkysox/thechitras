import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <img
            src="https://i.postimg.cc/B6yH9Gr5/IMG-9984.jpg"
            alt="Photography Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Capturing the Little beautiful tokens of love through lens
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/pramod.photogrphy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://wa.me/919535440990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Thechitras by Satyam Ray. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
