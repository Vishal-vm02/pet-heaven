import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import img1 from "./image/100.jpg";
import img2 from "./image/114.jpg";
import img3 from "./image/115.jpg";
import img4 from "./image/110.jpg";
import img5 from "./image/113.jpg";
import img6 from "./image/116.jpg";
import img from "./image/dog.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "./WishlistContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useCart } from "./CartContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function DogShow() {
  const { addToCart } = useCart();

  const handleAddToCart = (pet) => {
    addToCart(pet);
    // navigate('/addtocart');
  };

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackKey, setSnackKey] = useState(0);

  const { addToWishlist } = useWishlist();
  const [petList, setPetList] = useState([]);
  const cardss = [
    {
      title: "Dog11",
      name: "dogeshbhai",
      dec: "hello",
      age: "2",
      imgAlt: img1,
    },
    { title: "Cat", name: "dogeshbhai", dec: "hello", age: "2", imgAlt: img2 },
    {
      title: "Rabbit",
      name: "dogeshbhai",
      dec: "hello",
      age: "2",
      imgAlt: img3,
    },
    {
      title: "Turtles",
      name: "dogeshbhai",
      dec: "hello",
      age: "2",
      imgAlt: img6,
    },
    {
      title: "Birds",
      name: "dogeshbhai",
      dec: "hello",
      age: "2",
      imgAlt: img5,
    },
    {
      title: "Birds",
      name: "dogeshbhai",
      dec: "hello",
      age: "2",
      imgAlt: img5,
    },
    {
      title: "Birds",
      name: "dogeshbhai",
      dec: "hello",
      age: "2",
      imgAlt: img5,
    },
    {
      title: "Birds",
      name: "dogeshbhai",
      dec: "hello",
      age: "2",
      imgAlt: img5,
    },
  ];

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const collectionsToFetch = [
          "dogmanage",
          "catmanage",
          "birdsmanage",
          "rabbitmanage",
          "turtlemanage",
        ];
        let allPets = [];

        for (const colName of collectionsToFetch) {
          const snapshot = await getDocs(collection(db, colName));
          const pets = snapshot.docs.map((doc) => ({
            id: doc.id,
            type: colName.replace("manage", ""), // e.g., "dog" from "dogmanage"
            ...doc.data(),
          }));
          allPets = [...allPets, ...pets];
        }

        setPetList(allPets);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPets();
  }, []);
  const navigate = useNavigate();

  const handleAddToWishlist = (pet) => {
    addToWishlist(pet);
    setSnackMessage(`${pet.name} added to wishlist!`);
    setSnackKey((prev) => prev + 1); // forces Snackbar to re-render
    setShowSnackbar(true);
  };

  return (
    <div>
      <Box sx={{ p: 1 }}>
        <Typography variant="h4" gutterBottom>
          Available Pet for Buying
        </Typography>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
          style={{
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // marginTop:"5px",
            marginBottom: "10px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            style={{
              // backgroundColor: "rgba(255, 255, 255, 0.85)",
              padding: "10px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              maxWidth: "45%",
              marginLeft: "30px",
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                margin: 0,
                fontSize: "1.8rem",
                fontWeight: "600",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                textAlign: "center",
                color: "black",
              }}
            >
              From Our Hearts to Your Home
            </motion.h2>
          </motion.div>
        </motion.div>
      </Box>
      <div className=" container py-3">
        <Grid container spacing={3} justifyContent="center">
          {petList.map((pet, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "220px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                  flexWrap: "wrap",
                }}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  image={pet.image}
                  alt={pet.name}
                  sx={{
                    objectFit: "contain",
                    maxHeight: 130,
                    width: "100%",
                  }}
                />
                <CardContent sx={{ width: "100%" }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {pet.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Name:</strong> {pet.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Age:</strong> {pet.age}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Price:</strong> &#8377;
                    {pet.price}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <strong>Description:</strong> {pet.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      gap: 3,
                    }}
                  >
                    <Tooltip title="Add to Wishlist" arrow placement="top">
                      <FavoriteBorderOutlinedIcon
                        color="primary"
                        sx={{
                          fontSize: 30,
                          "&:hover": { color: "red" },
                          cursor: "pointer",
                        }}
                        onClick={() => handleAddToWishlist(pet)}
                      />
                    </Tooltip>
                    <Button
                      onClick={() => handleAddToCart(pet)}
                      sx={{ display: "flex", justifyContent: "center" }}
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Buy
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Snackbar
          key={snackKey}
          open={showSnackbar}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          onClose={(event, reason) => {
            if (reason !== "clickaway") {
              setShowSnackbar(false);
            }
          }}
        >
          <Alert
            severity="success"
            variant="filled"
            onClose={() => setShowSnackbar(false)}
          >
            {snackMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default DogShow;
