import React from "react";
import "./Aboutus.css"
import {useNavigate} from "react-router-dom"
import { motion } from "framer-motion";
import img from "./image/one.jpg";
import img1 from "./image/image1.png";
import img2 from "./image/dog.jpg";
import img3 from "./image/image.png"
import img4 from "./image/aboutdog1.jpg";
import img5 from "./image/aboutdog2.avif";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const imageZoom = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{marginBottom:"10px"}}>
      {/* Intro Section */}
      <div className="intro-section" style={{ backgroundImage: `url(${img1})` }}>
      <motion.div
    custom={1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-content"
  >
          <h1 style={{ fontSize: "2.5rem", color: "#FFD700" }}>About Us</h1>
          <h6 style={{ color: "#2c3e50" }}>
            We’re on a mission to connect kind hearts with loving pets, giving
            every animal a second chance at a happy home.
          </h6>
        </motion.div>
        <motion.div
          variants={imageZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center", borderRadius: "20px" }}
        >
          <img src={img3} alt="side" height={240} width={400} style={{ borderRadius: "16px" }} />
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="section-container">
  {/* Left Image */}
  <motion.div
    variants={imageZoom}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
  
    <img
      src={img4}
      alt="side"
      style={{
        width: "100%",
        maxWidth: "600px",
        borderRadius: "12px",
      }}
    />
  </motion.div>

  {/* Right Text */}
  <motion.div
   custom={2}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }}
   variants={fadeInUp}
   className="text-content"
  >
    <h4 style={{ fontWeight: "600" }}>
      Our Mission: Helping animals find love, care, and their forever loving homes.
    </h4>
    <p style={{ color: "#555", lineHeight: "1.6" }}>
      At our core, we believe every pet deserves a chance to be loved, cared for, and cherished.
      That’s why we’ve built a platform dedicated to uniting compassionate people with pets who are
      waiting for their forever homes. Whether it’s a playful pup, a curious kitten, or a gentle senior
      pet, we’re here to make the adoption journey easy, joyful, and full of heart. Together, we can
      turn second chances into forever stories.
    </p>
  </motion.div>
</div>


      {/* Story Section */}
      <div className="story-section section-container">
  <motion.div
    custom={3}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-content"
  >
          <h3>Our Story</h3>
          <p style={{ color: "#444", maxWidth: "600px" }}>
          Our story began with a simple yet powerful idea — to create a safe, loving space where pets and people could find each other. Whether you’re looking to adopt a furry friend, buy a new companion, or responsibly rehome a pet, we’re here to make every step easy, trustworthy, and filled with heart. We believe every animal deserves a chance to be part of a happy home, and every person deserves the joy that pets bring. Through our platform, we’ve made it possible for tails to wag, hearts to connect, and stories to begin.
          </p>
        </motion.div>
        <motion.div
    variants={imageZoom}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
          <img src={img5} alt="side" style={{
        width: "100%",
        maxWidth: "600px",
        borderRadius: "12px",
      }} />
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="cta-section"
  style={{ backgroundImage: `url(${img2})` }}
>
  <motion.div
    initial={{ y: 60, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
          <h1 style={{ marginTop: "205px", color: "orange", fontSize: "2rem" }}>
            Rescue. Rehome. Repeat.
          </h1>
          <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/adopt")}
    >
            Click Me
          </motion.button>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
