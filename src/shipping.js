import React, { useState } from 'react';
import {
  Pets as PetsIcon,
  Favorite as FavoriteIcon,
  MonetizationOn as MonetizationOnIcon,
  VerifiedUser as VerifiedUserIcon,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function Mainscreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      icon: <PetsIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Adopt a Pet",
      description: "Find your perfect companion and give them a loving home.",
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40, color: "#e91e63" }} />,
      title: "Pet Care Support",
      description: "Access 24/7 support for pet health, care, and training tips.",
    },
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
      title: "Buy & Sell Pets",
      description: "A safe marketplace for responsible pet transactions.",
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
      title: "Verified Listings",
      description: "Every pet listing is checked for legitimacy and safety.",
    },
  ];

  return (
    <Box>
      {/* Features Section */}
      <Box sx={{ py: 6, px: { xs: 2, md: 6 }, mb: 1, backgroundColor: "#f7f8fa" }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  width:"300px",
                  textAlign: "center",
                  borderRadius: 2.5,
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s",
                  ":hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Mainscreen;
