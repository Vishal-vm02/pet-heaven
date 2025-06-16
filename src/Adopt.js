import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from './firebase-config';
import { getDownloadURL, ref } from "firebase/storage";
import img2 from "./image/dog.jpg";
import img from './image/one.jpg'; // fallback image
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  marginBottom: 15
}));

function Adopt() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'adoptpetdetails'));
        const petList = await Promise.all(querySnapshot.docs.map(async (doc) => {
          const pet = { id: doc.id, ...doc.data() };

          // If image is a Firebase Storage path, fetch the download URL
          if (pet.image && pet.image.startsWith("gs://")) {
            try {
              const imageRef = ref(storage, pet.image);
              const url = await getDownloadURL(imageRef);
              pet.image = url;
            } catch (error) {
              console.error("❌ Error loading image URL:", error);
              pet.image = img; // fallback
            }
          }

          return pet;
        }));

        setPets(petList);
      } catch (error) {
        console.error("🔥 Error fetching pets:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate()

  return (
    <div>
      <Typography variant="h4" gutterBottom>
       Give Love a Home — Adopt a Pet Today
      </Typography>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          height: "320px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 10,
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "10px",
        }}
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <h1 style={{ marginTop: "205px", color: "#FF8C00", fontSize: "2rem" }}>
            Rescue. Rehome. Repeat.
          </h1>
        </motion.div>
      </motion.div>

      {/* Pet Cards */}
      <div className='container py-3'>
        <Grid container spacing={3} justifyContent="center">
          {pets.map((pet, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  width: "240px",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1,
                  // border:"1px solid black"

                }}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  image={pet.image || img}
                  alt={pet.name}
                  sx={{
                    objectFit: 'contain',
                    maxHeight: "130px",
                    width: '100%',
                    // border:"1px solid black"
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
                  {pet.price && (
                    <Typography variant="body2" gutterBottom>
                      <strong>Price:</strong> ₹{pet.price}
                    </Typography>
                  )}
                  <Typography variant="body2" gutterBottom>
                    <strong>Location:</strong> {pet.location || 'N/A'}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <strong>Description:</strong> {pet.description}
                  </Typography>
                   <Button onClick={() => navigate("/adoptfrom", { state: pet })} fullWidth variant="contained" color="primary">
  Adopt
</Button>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Adopt;
