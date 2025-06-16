// import React from 'react'
import Silder from './Silder'
// import Dog from './pet/Dog'
import img1 from './image/100.jpg'
import img2 from './image/114.jpg'
import img3 from './image/115.jpg'
import img4 from './image/110.jpg'
import img5 from './image/113.jpg'
import img6 from './image/116.jpg'
import Shipping from "./shipping"
import React, { useState, useEffect } from 'react';
// import { Box, Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import {useNavigate} from "react-router-dom"

import { Grid, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';
import { query, limit } from "firebase/firestore";
import { useCart } from './CartContext';


function Home() {
      const navigate = useNavigate();
  
    const cards = [
        { title: 'Dog', imgAlt:img1 },
        { title: 'Cat', imgAlt: img2 },
        { title: 'Rabbit', imgAlt: img3  },
        { title: 'Turtles', imgAlt: img6  },
        { title: 'Birds', imgAlt: img5  },
      ];
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
      const buy = [
        { title: 'Dog11', name:"dogeshbhai", dec:"hello", age:"2", imgAlt:img1 },
        { title: 'Cat',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img2 },
        { title: 'Rabbit',name:"dogeshbhai", dec:"hello", age:"2",  imgAlt: img3  },
        { title: 'Turtles',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img6  },
        { title: 'Birds',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img5  },
        { title: 'Birds',name:"dogeshbhai", dec:"hello", age:"2",  imgAlt: img5  },
        { title: 'Birds',name:"dogeshbhai", dec:"hello", age:"2", imgAlt: img5  },
      ];

 useEffect(() => {
    const fetchPets = async () => {
      try {
        const snapshot = await getDocs(collection(db, "adoptpetdetails"));
        const pets = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPetList(pets);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPets();
  }, []);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const collectionsToFetch = [
          "dogmanage",
          "catmanage",
          "birdsmanage",
          "rabbitmanage",
          "turtlemanage"
        ];
  
        let allPets = [];
  
        for (const colName of collectionsToFetch) {
          const q = query(collection(db, colName), limit(2)); // LIMIT to 2
          const snapshot = await getDocs(q);
  
          const pets = snapshot.docs.map(doc => ({
            id: doc.id,
            type: colName.replace("manage", ""), // optional type field
            ...doc.data()
          }));
  
          allPets = [...allPets, ...pets]; // push 2 from each collection
        }
  
        setBuy1(allPets); // or setPetList
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };
  
    fetchPets();
  }, []);
  

  const { addToCart } = useCart();
    
      const handleAddToCart = (pet) => {
      addToCart(pet);
      navigate('/addtocart');
    };
  
  const [buy1,setBuy1] = useState([])
  const [petList, setPetList] = useState([]);

  return (
    <div>
      <Silder/>
      <h2 className='container' > Pet Categories</h2>
      <Container sx={{ py: 4 }}>
  <Grid container spacing={2} justifyContent="space-around">
    
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card
        sx={{
          height: 180,
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
        }}
      >
        <CardMedia
          component="img"
          image={img1}
          alt="Dog"
          sx={{
            flex: 1,
            maxHeight: 100,
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <CardContent
          sx={{
            width: '100%',
            p: 0.5,
            pt: 1,
            textAlign: 'center',
          }}
        >
          <Button variant="contained" sx={{fontWeight:"bold", fontSize:"1rem", textTransform: 'none', mt:1}} onClick={()=>navigate("/dog")}>Dog</Button>
          {/* <Typography  variant="body1" fontWeight="bold" fontSize="1rem" noWrap>
           <button>Dog</button>
          </Typography> */}
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card
        sx={{
          height: 180,
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
        }}
      >
        <CardMedia
          component="img"
          image={img2}
          alt="Cat"
          sx={{
            flex: 1,
            maxHeight: 100,
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <CardContent
          sx={{
            width: '100%',
            p: 0.5,
            pt: 1,
            textAlign: 'center',
          }}
        >
          {/* <Typography variant="body1" fontWeight="bold" fontSize="1rem" noWrap>
            Cat
          </Typography> */}
          <Button onClick={()=>navigate("/cat")} variant="contained" sx={{fontWeight:"bold", fontSize:"1rem", textTransform: 'none', mt:1}}>Cat</Button>

        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card
        sx={{
          height: 180,
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
        }}
      >
        <CardMedia
          component="img"
          image={img3}
          alt="Rabbit"
          sx={{
            flex: 1,
            maxHeight: 100,
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <CardContent
          sx={{
            width: '100%',
            p: 0.5,
            pt: 1,
            textAlign: 'center',
          }}
        >
          {/* <Typography variant="body1" fontWeight="bold" fontSize="1rem" noWrap>
            Rabbit
          </Typography> */}
          <Button onClick={()=>navigate("/rabbit")} variant="contained" sx={{fontWeight:"bold", fontSize:"1rem", textTransform: 'none', mt:1}}>Rabbit</Button>

        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card
        sx={{
          height: 180,
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
        }}
      >
        <CardMedia
          component="img"
          image={img6}
          alt="Turtles"
          sx={{
            flex: 1,
            maxHeight: 100,
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <CardContent
          sx={{
            width: '100%',
            p: 0.5,
            pt: 1,
            textAlign: 'center',
          }}
        >
          <Button onClick={()=>navigate("/turtles")} variant="contained" sx={{fontWeight:"bold", fontSize:"1rem", textTransform: 'none', mt:1}}>Turtles</Button>

          {/* <Typography variant="body1" fontWeight="bold" fontSize="1rem" noWrap>
            Turtles
          </Typography> */}
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card
        sx={{
          height: 180,
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
        }}
      >
        <CardMedia
          component="img"
          image={img5}
          alt="Birds"
          sx={{
            flex: 1,
            maxHeight: 100,
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <CardContent
          sx={{
            width: '100%',
            p: 0.5,
            pt: 1,
            textAlign: 'center',
          }}
        >
          <Button  onClick={()=>navigate("/birds")} variant="contained" sx={{fontWeight:"bold", fontSize:"1rem", textTransform: 'none', mt:1}}>Birds</Button>

          {/* <Typography variant="body1" fontWeight="bold" fontSize="1rem" noWrap>
            Birds
          </Typography> */}
        </CardContent>
      </Card>
    </Grid>

  </Grid>
</Container>

      <div>
        <h2 className='container' >Adoption pet</h2>
        <div className='container py-3'>
  <Grid container spacing={3} justifyContent="center">
    {petList.slice(0, 7).map((pet, index) => (
      <Grid item key={index} xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: '100%',
            width: "280px",
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
              <strong>Age:</strong> {pet.age}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Location: </strong> 
              {pet.location}
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
      <div>
        <h2 className='container' >Meet Our New Pets</h2>
        <div className='container py-4'>
  <Grid container spacing={3} justifyContent="center">
    {buy1.map((pet, index) => (
      <Grid item key={index} xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: '100%',
            width:"220px",
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
            alt={pet.image}
            sx={{
              objectFit: 'contain',
              maxHeight: 140,
              width: '100%',
            }}
          />
          <CardContent sx={{ width: '100%' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {pet.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Name:</strong> {pet.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Age:</strong> {pet.age}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Description:</strong> {pet.description}
            </Typography>
            <Button onClick={() => handleAddToCart(pet)} sx={{display:"flex",justifyContent:"center"}} fullWidth variant="contained" color="primary">
                Buy 
              </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</div>


</div>
<Shipping/>

</div>  
  )
}

export default Home
