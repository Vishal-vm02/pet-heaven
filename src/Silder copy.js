import React from "react";
import Slider from "react-slick";
import { Box, Grid, Paper,Container } from "@mui/material"; // Imported only required MUI components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from './image/pegvin.jpg';
import img2 from './image/19.jpg';
import img3 from './image/18.jpg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Stationery Shop
            </Typography>
            <Button color="inherit">
              <ShoppingCartOutlinedIcon fontSize="large" sx={{ mt: 1 }} />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth sx={{backgroundColor:"snow"}}>
        <Box sx={{ borderRadius: "10px", overflow: "hidden", mt:"5px" }}>
          <Slider {...settings}>
            <Box>
            <Container
    //   maxWidth="lg"0
      sx={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", marginBottom: "10px", color: "#0056b3" }}
            >
              Safety Glasses
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", marginBottom: "20px", color: "#0056b3" }}
            >
              Protective Glove
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1em", lineHeight: "1.5", marginBottom: "20px", color: "#333" }}
            >
              Enhance your personal safety with our premium-quality glasses and protective gloves.
              Designed for durability and comfort, they are ideal for various activities requiring
              safety precautions.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "12px 24px",
                fontSize: "1.1em",
                textTransform: "none",
                marginBottom: "10px",
              }}
            >
              Add to Cart
            </Button>
            <Typography
              variant="h6"
              sx={{ marginLeft: "5px", display: "inline-block", color: "#333" }}
            >
              $80.00
            </Typography>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              width: "500px",
              height: "500px",
              backgroundColor: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#888",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            500 x 500
          </Paper>
        </Grid>
      </Grid>
    </Container>
            </Box>
            <Box>
            <Container
    //   maxWidth="lg"0
      sx={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", marginBottom: "10px", color: "#0056b3" }}
            >
              Safety Glasses
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", marginBottom: "20px", color: "#0056b3" }}
            >
              Protective Glove
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1em", lineHeight: "1.5", marginBottom: "20px", color: "#333" }}
            >
              Enhance your personal safety with our premium-quality glasses and protective gloves.
              Designed for durability and comfort, they are ideal for various activities requiring
              safety precautions.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "12px 24px",
                fontSize: "1.1em",
                textTransform: "none",
                marginBottom: "10px",
              }}
            >
              Add to Cart
            </Button>
            <Typography
              variant="h6"
              sx={{ marginLeft: "5px", display: "inline-block", color: "#333" }}
            >
              $80.00
            </Typography>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              width: "500px",
              height: "500px",
              backgroundColor: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#888",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            500 x 500
          </Paper>
        </Grid>
      </Grid>
    </Container>
            </Box>
            <Box>
            <Container
    //   maxWidth="lg"0
      sx={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", marginBottom: "10px", color: "#0056b3" }}
            >
              Safety Glasses
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", marginBottom: "20px", color: "#0056b3" }}
            >
              Protective Glove
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1em", lineHeight: "1.5", marginBottom: "20px", color: "#333" }}
            >
              Enhance your personal safety with our premium-quality glasses and protective gloves.
              Designed for durability and comfort, they are ideal for various activities requiring
              safety precautions.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "12px 24px",
                fontSize: "1.1em",
                textTransform: "none",
                marginBottom: "10px",
              }}
            >
              Add to Cart
            </Button>
            <Typography
              variant="h6"
              sx={{ marginLeft: "5px", display: "inline-block", color: "#333" }}
            >
              $80.00
            </Typography>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              width: "500px",
              height: "500px",
              backgroundColor: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#888",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            500 x 500
          </Paper>
        </Grid>
      </Grid>
    </Container>
            </Box>
          </Slider>
        </Box>
      </Container>
    </React.Fragment>
    </div>
  );
};

export default ImageCarousel;
