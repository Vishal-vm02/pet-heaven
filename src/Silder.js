import React from "react";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "./image/110.jpg";
import img3 from "./image/112.jpg";
import img4 from "./image/101.jpg";
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

  const imageStyle = {
    borderRadius: "7px",
    width: "400px",
    height: "400px",
    maxWidth: "100%",
  };

  const slides = [
    {
      img: img4,
      title1: "Treat Your Best Friend",
      title2: "to the Best Life",
      desc:
        "Golden Retrievers are loyal, loving, and always ready for fun. Whether it's a fetch session or a cozy cuddle, they deserve the best. Explore products made just for their golden hearts and playful energy.",
      alt: "Golden Retriever",
    },
    {
      img: img2,
      title1: "Soft Hearts Deserve",
      title2: "Soft Care",
      desc:
        "Rabbits are gentle, curious companions that thrive on comfort and care. From cozy bedding to healthy nibbles, their happiness starts here. Explore handpicked essentials for your fluffy little friend.",
      alt: "Rabbit",
    },
    {
      img: img3,
      title1: "Slow and Steady Deserves",
      title2: "Steady Care",
      desc:
        "Turtles thrive in calm, well-cared-for environments tailored to their needs. From basking spots to balanced diets, every detail matters. Explore essentials that keep your shelled friend happy and healthy.",
      alt: "Turtle",
    },
  ];

  return (
    <div style={{ backgroundColor: "#ebf7fa" }}>
      <Container
        maxWidth="lg"
        sx={{
          padding: 0,
          marginBottom: "25px",
          borderRadius: "8px",
          ".slick-prev, .slick-next": {
            zIndex: 2,
            display: "block !important",
          },
          ".slick-prev": {
            left: "-30px",
          },
          ".slick-next": {
            right: "-30px",
          },
          ".slick-dots": {
            bottom: "10px !important",
            zIndex: 2,
          },
          ".slick-dots li button:before": {
            color: "#0056b3",
            fontSize: "12px",
          },
          // display:"flex",
          // justifyContent:"center",
        }}
      >
        <section className="home-slides">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="single-banner-item" key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "left" },
                    padding: "20px",
                    gap: 4,
                  }}
                >
                  {/* Text */}
                  <Box sx={{ flex: 1, px: 2 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.h1
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                          fontFamily: "'Segoe UI'",
                          marginBottom: "10px",
                          color: "#0056b3",
                          fontSize: "3rem",
                        }}
                      >
                        {slide.title1}
                      </motion.h1>
                      <motion.h1
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{
                          fontFamily: "'Segoe UI'",
                          marginBottom: "20px",
                          color: "#0056b3",
                          fontSize: "2.5rem",
                        }}
                      >
                        {slide.title2}
                      </motion.h1>
                      <motion.p
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                          fontSize: "1.1em",
                          lineHeight: "1.5",
                          marginBottom: "20px",
                          color: "#333",
                        }}
                      >
                        {slide.desc}
                      </motion.p>
                    </motion.div>
                  </Box>

                  {/* Image */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flex: 1,
                      px: 2,
                    }}
                  >
                    <motion.img
                      style={imageStyle}
                      src={slide.img}
                      alt={slide.alt}
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                    />
                  </Box>
                </Box>
              </div>
            ))}
          </Slider>
        </section>
      </Container>
    </div>
  );
};

export default ImageCarousel;
