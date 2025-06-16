import React from 'react';
import { motion } from "framer-motion";
import './Categories.css';
import img from "./image/fh3.jpg";
import { Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import img1 from './image/100.jpg';
import img2 from './image/114.jpg';
import img3 from './image/115.jpg';
import img5 from './image/113.jpg';
import img6 from './image/116.jpg';
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  return (
    <div>
     <motion.div
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
  className="hero-section" // This class controls the background image
  style={{ backgroundImage: `url(${img})` }}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    className="intro-card"
  >
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="intro-title"
    >
      Find Your New Best Friend – Buy a Pet Today
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="intro-text"
    >
      Discover the perfect companion — bring home a loving, loyal pet who’s ready to be part of your family.
    </motion.p>
  </motion.div>
</motion.div>


      <h1 className='container' style={{ marginTop: "20px", marginBottom: "10px", display:"flex", justifyContent:"center", fontWeight:"bold" }}>Pet Categories</h1>
      <Container sx={{ py: 2 }}>
        <Grid container spacing={2} justifyContent="space-around">

          {/* Dog Card */}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={cardStyle}>
              <CardMedia component="img" image={img1} alt="Dog" sx={mediaStyle} />
              <CardContent sx={{ textAlign: 'center' }}>
                <Button onClick={() => navigate("/dog")} variant="contained" sx={buttonStyle}>Dog</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Cat Card */}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={cardStyle}>
              <CardMedia component="img" image={img2} alt="Cat" sx={mediaStyle} />
              <CardContent sx={{ textAlign: 'center' }}>
                <Button onClick={() => navigate("/cat")} variant="contained" sx={buttonStyle}>Cat</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Rabbit Card */}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={cardStyle}>
              <CardMedia component="img" image={img3} alt="Rabbit" sx={mediaStyle} />
              <CardContent sx={{ textAlign: 'center' }}>
                <Button onClick={() => navigate("/rabbit")} variant="contained" sx={buttonStyle}>Rabbit</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Turtles Card */}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={cardStyle}>
              <CardMedia component="img" image={img6} alt="Turtles" sx={mediaStyle} />
              <CardContent sx={{ textAlign: 'center' }}>
                <Button onClick={() => navigate("/turtles")} variant="contained" sx={buttonStyle}>Turtles</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Birds Card */}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={cardStyle}>
              <CardMedia component="img" image={img5} alt="Birds" sx={mediaStyle} />
              <CardContent sx={{ textAlign: 'center' }}>
                <Button onClick={() => navigate("/birds")} variant="contained" sx={buttonStyle}>Birds</Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

const cardStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 1,
  boxShadow: 2,
  borderRadius: 2,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

const mediaStyle = {
  height: 100,
  width: '100%',
  objectFit: 'contain',
};

const buttonStyle = {
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: 'none',
  mt: 1,
};

export default Categories;
