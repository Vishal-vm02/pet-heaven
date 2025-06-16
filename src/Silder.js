import React from "react";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img1 from './image/first.jpg';
import img2 from './image/110.jpg';
import img3 from './image/112.jpg';
import img4 from './image/101.jpg';
import { motion } from "framer-motion";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ backgroundColor: "#ebf7fa"}} >
    <Container maxWidth="lg" style={{ padding: 0, marginBottom: "25px", borderRadius: "8px" }}>
      <section className="home-slides">
        <Slider {...settings}>
          {/* Slide 1 - Golden Retriever */}
          <div className="single-banner-item">
            <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", padding: "20px" }}>
              <div className="col-lg-6 col-md-12" style={{ flex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <Box>
                    <motion.h1
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      style={{ fontFamily: "'Segoe UI'", marginBottom: "10px", color: "#0056b3", fontSize: "3rem" }}
                    >
                      Treat Your Best Friend
                    </motion.h1>
                    <motion.h1
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      style={{ fontFamily: "'Segoe UI'", marginBottom: "20px", color: "#0056b3", fontSize: "2.5rem" }}
                    >
                      to the Best Life
                    </motion.h1>
                    <motion.p
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      style={{ fontSize: "1.1em", lineHeight: "1.5", marginBottom: "20px", color: "#333" }}
                    >
                      Golden Retrievers are loyal, loving, and always ready for fun.
                      Whether it's a fetch session or a cozy cuddle, they deserve the best.
                      Explore products made just for their golden hearts and playful energy.
                    </motion.p>
                  </Box>
                </motion.div>
              </div>
              <div className="col-lg-6 col-md-12"  style={{display:"flex",justifyContent:"center",}}>
                <motion.img
                  style={{ borderRadius: "7px" }}
                  src={img4}
                  alt="Golden Retriever"
                  width="400"
                  height="400"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Slide 2 - Rabbit */}
          <div className="single-banner-item">
            <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", padding: "20px" }}>
              <div className="col-lg-6 col-md-12" style={{ flex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <Box>
                    <motion.h1 initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} style={{ fontFamily: "'Segoe UI'", marginBottom: "10px", color: "#0056b3", fontSize: "3rem" }}>
                      Soft Hearts Deserve
                    </motion.h1>
                    <motion.h1 initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} style={{ fontFamily: "'Segoe UI'", marginBottom: "20px", color: "#0056b3", fontSize: "2.5rem" }}>
                      Soft Care
                    </motion.h1>
                    <motion.p initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} style={{ fontSize: "1.1em", lineHeight: "1.5", marginBottom: "20px", color: "#333" }}>
                      Rabbits are gentle, curious companions that thrive on comfort and care.
                      From cozy bedding to healthy nibbles, their happiness starts here.
                      Explore handpicked essentials for your fluffy little friend.
                    </motion.p>
                  </Box>
                </motion.div>
              </div>
              <div className="col-lg-6 col-md-12"  style={{display:"flex",justifyContent:"center",}}>
                <motion.img
                  style={{ borderRadius: "7px" }}
                  src={img2}
                  alt="Rabbit"
                  width="400"
                  height="400"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Slide 3 - Turtle */}
          <div className="single-banner-item">
            <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", padding: "20px" }}>
              <div className="col-lg-6 col-md-12" style={{ flex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <Box>
                    <motion.h1 initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} style={{ fontFamily: "'Segoe UI'", marginBottom: "10px", color: "#0056b3", fontSize: "3rem" }}>
                      Slow and Steady Deserves
                    </motion.h1>
                    <motion.h1 initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} style={{ fontFamily: "'Segoe UI'", marginBottom: "20px", color: "#0056b3", fontSize: "2.5rem" }}>
                      Steady Care
                    </motion.h1>
                    <motion.p initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} style={{ fontSize: "1.1em", lineHeight: "1.5", marginBottom: "20px", color: "#333" }}>
                      Turtles thrive in calm, well-cared-for environments tailored to their needs.
                      From basking spots to balanced diets, every detail matters.
                      Explore essentials that keep your shelled friend happy and healthy.
                    </motion.p>
                  </Box>
                </motion.div>
              </div>
              <div className="col-lg-6 col-md-12"  style={{display:"flex",justifyContent:"center",}}>
                <motion.img
                  style={{ borderRadius: "7px" }}
                  src={img3}
                  alt="Turtle"
                  width="400"
                  height="400"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                />
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </Container>
    </div>
  );
};

export default ImageCarousel;
