// import React from 'react'

// function Petshift() {
//   return (
//     <div>
//       <h1>Pet Shift page</h1>
//     </div>
//   )
// }

// export default Petshift
// import React from 'react'

// function Dog() {
//   return (
//     <div>
//       <h1 >dog page</h1>
//     </div>
//   )
// }

// export default Dog
import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from "framer-motion";
import img from "./image/dog.jpg";
function DogShow() {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const snapshot = await getDocs(collection(db, "buypetdetails"));
        const pets = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPetList(pets);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
    <Box sx={{ p: 1 }}>
      <Typography variant="h4" gutterBottom>
      Buy Pet From Owner
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
    marginBottom:"10px",
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
      display:"flex",
      justifyContent:"center"
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
        display:"flex",
        textAlign:"center",
        color:"#FF6500"
      }}
    >
      Buy  Directly from Caring Owners
    </motion.h2>

    {/* <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      style={{
        marginTop: "8px",
        fontSize: "1rem",
        color: "#333",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      Find the perfect match — connect your pet with a loving, responsible new home.
    </motion.p> */}
  </motion.div>
</motion.div>


      <div className=' container py-3' style={{display:"flex",justifyContent:"center"}}>
              <Grid container spacing={1} justifyContent="center">
        {petList.map((pet, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                width:"300px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
              }}
              elevation={3}
            >
              <CardMedia
                component="img"
                image={pet.image}
                alt={pet.name}
                sx={{
                  objectFit: 'contain',
                  maxHeight: 130,
                  width: '100%',
                }}
              />
              <CardContent sx={{ width: '100%' }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {pet.petName} - {pet.petCategory}
                </Typography>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                 <strong>Owner Name:</strong> {pet.ownerName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <strong>Phone No:</strong> {pet.phone}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <strong>Email:</strong> {pet.email}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <strong>Address:</strong> {pet.address}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <strong>City:</strong> {pet.city}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <strong>Pincode:</strong> {pet.zip}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Pet Age:</strong> {pet.petAge}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Pet Price: </strong>&#8377;  {pet.petPrice}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <strong>Description:</strong> {pet.description}
                </Typography>
                {/* <Button fullWidth variant="contained" color="primary">
                    Buy
                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
              </div>
    </Box>
    </div>
  );
}

export default DogShow;


