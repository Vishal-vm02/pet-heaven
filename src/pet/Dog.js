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
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from "framer-motion";
import img1 from '../image/100.jpg'
import img2 from '../image/114.jpg'
import img3 from '../image/115.jpg'
import img4 from '../image/110.jpg'
import img5 from '../image/113.jpg'
import img6 from '../image/116.jpg'

import img from "../image/dog.jpg";
import { useCart } from '../CartContext';


function DogShow() {

  const { addToCart } = useCart();

  const handleAddToCart = (pet) => {
    addToCart(pet);
    // navigate('/addtocart');
  };
  
  const [petList, setPetList] = useState([]);
  const cardss = [
          { title: 'Dog11', name:"dogeshbhai", dec:"hello", age:"2", imgAlt:img1 },
          { title: 'Cat',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img2 },
          { title: 'Rabbit',name:"dogeshbhai", dec:"hello", age:"2",  imgAlt: img3  },
          { title: 'Turtles',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img6  },
          { title: 'Birds',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img5  },
          { title: 'Birds',name:"dogeshbhai", dec:"hello", age:"2",  imgAlt: img5  },
          { title: 'Birds',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img5  },
          { title: 'Birds',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img5  },
  
        ];

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const snapshot = await getDocs(collection(db, "dogmanage"));
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
    <Box sx={{ p: 3 }}>
      {/* <Typography variant="h4" gutterBottom>
        Available Dogs for Buying
      </Typography> */}
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
        color:"black"
      }}
    >
      From Our Hearts to Your Home 
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


      <div className=' container py-3'>
              <Grid container spacing={3} justifyContent="center">
        {petList.map((pet, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                width:"280px",
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
                <Button  onClick={() => handleAddToCart(pet)} fullWidth variant="contained" color="primary">
                    Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
              </div>
      {/* Grid to display dogs */}

      {/* <Grid container spacing={3}>
        {petList.map((pet) => (
          <Grid item xs={12} sm={6} md={4} key={pet.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={pet.image}
                alt={pet.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pet.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Age:</b> {pet.age} <br />
                  <b>Price:</b> ${pet.price} <br />
                  <b>Description:</b> {pet.description}
                </Typography>
              </CardContent>
              <Button size="small" color="primary" sx={{ m: 1 }}>
                Adopt
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
    </div>
  );
}

export default DogShow;
