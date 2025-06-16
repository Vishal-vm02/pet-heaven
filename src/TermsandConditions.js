import * as React from 'react';
import { motion } from 'framer-motion';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
// import { Grid } from '@mui/material';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CircleIcon from '@mui/icons-material/Circle';
// import Silder from './Silder'
// import img1 from './image/100.jpg'
// import img2 from './image/114.jpg'
// import img3 from './image/115.jpg'
// import img4 from './image/110.jpg'
// import img5 from './image/113.jpg'
// import img6 from './image/116.jpg'

export default function AccordionUsage() {
  return (
    <div>
        <div 
  style={{
    background: "#ebf7fa",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }}
>
<motion.div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid #e0e0e0",
          padding: "40px 20px",
          background: "linear-gradient(135deg, #f0f4ff, #d9e4ff)",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
          margin: "30px auto",
          maxWidth: "900px",
        }}
        initial={{ opacity: 0, y: 20 }}  // Start position (invisible and slightly lower)
        animate={{ opacity: 1, y: 0 }}   // Final position (fully visible and centered)
        transition={{ duration: 1, ease: "easeOut" }}  // Duration and easing function
      >
        <motion.h2
          style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            marginBottom: "10px",
            fontWeight: "bold",
            fontSize: "2.2rem",
            color: "#2c3e50",
          }}
          initial={{ opacity: 0, y: -10 }}  // Fade in from top
          animate={{ opacity: 1, y: 0 }}    // Fade in to original position
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}  // Slight delay for staggered effect
        >
          Pet Heaven – Terms & Conditions
        </motion.h2>
        <motion.p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            marginBottom: "20px",
            maxWidth: "700px",
          }}
          initial={{ opacity: 0, y: 10 }}  // Fade in from bottom
          animate={{ opacity: 1, y: 0 }}    // Fade in to original position
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}  // Delay for staggered effect
        >
          Welcome to Pet Heaven! These Terms & Conditions govern your use of our platform for <strong>Pet Adoption</strong>  and <strong>Buying and Selling of Pets.</strong>  By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our platform.
        </motion.p>
      </motion.div>

</div>

   
    <div style={{ display: "flex", justifyContent: "center", padding: "10px", flexDirection:"column" }}>
        
      {/* Container div: It will take full width of the screen */}
      <div
        className="container"
        style={{
          width: "100%", // Ensures the container spans full width
          maxWidth: "1200px", // Optional: Max width for larger screens
          border: "1px solid black", // For visual appearance
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fafafa",
          display:"flex",
          justifyContent:"center",
        }}
      >
        {/* Grid container for layout of Accordion */}
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            {/* Accordion with full width */}
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">1. Eligibility</Typography>
              </AccordionSummary>
              <AccordionDetails>
            You must be at least 18 years old to use Pet Heaven.
              <br/>

By registering, you confirm that all information provided is accurate and up to date.


              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12}>
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">2. Services Offered</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <strong>Adoption Listings:</strong> Connects users seeking to adopt pets with current pet owners or shelters. <br/>

<strong>Buy & Sell Listings:</strong> Allows users to list pets for sale or purchase pets directly from other users.<br/>

{/* Pet Heaven acts only as an intermediary and does not directly own or sell any animals. */}
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">3. User Responsibilities</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <strong>Users are responsible for:</strong> <br/>
              <p class="bi bi-dot">The health, safety, and legality of any pet listed, adopted, sold, or bought. </p>
              <p class="bi bi-dot">Complying with all local, state, and federal laws regarding pet ownership and commerce.</p>
              <p class="bi bi-dot">Ensuring pets are not used for illegal activities, including but not limited to breeding mills, fighting, or resale under false pretenses.
              </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">4. Listings Requirements</Typography>
              </AccordionSummary>
              <AccordionDetails>
             <strong> Listings must include:</strong>
             <p class="bi bi-dot">Accurate information (breed, age, sex, vaccination status, health conditions). </p>
             <p class="bi bi-dot">Clear and recent photos of the pet. </p>
             <p class="bi bi-dot">Honest details about the pet’s behavior or medical needs.</p>
             <strong> Prohibited listings include:</strong>
             <p class="bi bi-dot">Wild, exotic, endangered, or protected species.</p>
             <p class="bi bi-dot">Sick, injured, or underage animals not ready for adoption/sale. </p>
             <p class="bi bi-dot">Misleading or fraudulent information.</p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">5. Adoption Process</Typography>
              </AccordionSummary>
              <AccordionDetails>
              Adopters may be required to undergo screening or home checks at the discretion of the pet’s current owner. <br/>

<strong>Adopting parties must commit to responsible pet ownership, including:</strong>
<p class="bi bi-dot">Providing adequate food, shelter, medical care, and emotional support.</p>
<p class="bi bi-dot">Not abandoning or reselling the pet without proper procedure.</p>



              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">6. Buying & Selling Policy</Typography>
              </AccordionSummary>
              <AccordionDetails>
<p class="bi bi-dot">Pet Heaven does not guarantee or mediate payments between buyers and sellers.</p>
<p class="bi bi-dot">All payments and transfer of ownership are handled directly between parties.</p>
<p class="bi bi-dot">No refunds or returns are guaranteed unless mutually agreed by both parties.</p>
</AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">7. Liability & Disclaimer</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <strong>Pet Heaven does not:</strong>
              <p class="bi bi-dot">Guarantee the health, behavior, or suitability of any pet.</p>
              <p class="bi bi-dot">Take responsibility for transactions or disputes between users.</p> 
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion style={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight:"bold"}} component="span">8. Privacy Policy</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <strong>Pet Heaven does not:</strong>
              <p class="bi bi-dot">By using Pet Heaven, you consent to our [Privacy Policy link]. </p>

              <p class="bi bi-dot">Your personal data will be used only to facilitate transactions and maintain platform integrity.</p>

              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        
      </div>
    </div>
    <div>
    {/* <h2 className='container'>Help Desk</h2> */}
    {/* backgroundColor:"#edf2fa" */}
          <div  style={{display:"flex", flexDirection:"column", marginBottom:"10px"}} >
          
            <div className='container' style={{  display: "flex", flexDirection: "row",  }}>
      <Container sx={{ py: 4 }}>
      <Grid container spacing={2} justifyContent="space-around">
          {/* Card 1: Dog */}
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card
              sx={{
                height: 170,
                width: 170,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                boxShadow: 2,
                borderRadius: 2,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up the card on hover
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
                }
              }}
            >
              <CardContent sx={{ width: '100%', p: 0.5, pt: 1, textAlign: 'center' }}>
                <EmailOutlinedIcon color="primary" sx={{ fontSize: 50, marginBottom: 1 }} />
                <Typography variant="body1" fontWeight="bold" fontSize="1.1rem">
                  Email Us:
                </Typography>
                <Typography variant="body1" fontSize="1rem">
                  vm0211@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Cat */}
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card
              sx={{
                height: 170,
                width: 170,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                boxShadow: 2,
                borderRadius: 2,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up the card on hover
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
                }
              }}
            >
              <CardContent sx={{ width: '100%', p: 0.5, pt: 1, textAlign: 'center' }}>
                <PhoneInTalkOutlinedIcon color="primary" sx={{ fontSize: 50, marginBottom: 1 }} />
                <Typography variant="body1"  fontWeight="bold" fontSize="1.1rem">
                  Call Us:
                </Typography>
                <Typography variant="body1" fontSize="1rem">
                  9023127367
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Rabbit */}
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card
              sx={{
                height: 170,
                width: 170,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                boxShadow: 2,
                borderRadius: 2,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up the card on hover
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
                }
              }}
            >
              <CardContent sx={{ width: '100%', p: 0.5, pt: 1, textAlign: 'center' }}>
                <ChatOutlinedIcon color="primary" sx={{ fontSize: 50, marginBottom: 1 }} />
                <Typography variant="body1"  fontWeight="bold" fontSize="1.1rem">
                  Live Chat:
                </Typography>
                <Typography variant="body1" fontSize="1rem">
                  Available 9 AM – 6 PM (Mon–Sat)
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 4: Turtles */}
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card
              sx={{
                height: 170,
                width: 170,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                boxShadow: 2,
                borderRadius: 2,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up the card on hover
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
                }
              }}
            >
              <CardContent sx={{ width: '100%', p: 0.5, pt: 1, textAlign: 'center' }}>
                <LocationOnOutlinedIcon color="primary" sx={{ fontSize: 50, marginBottom: 1 }} />
                <Typography variant="body1"  fontWeight="bold" fontSize="1.1rem">
                  Our Office:
                </Typography>
                <Typography variant="body1" fontSize="1rem">
                  6890 Blvd, The Bronx, NY 1058, USA
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 5: Birds */}
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card
              sx={{
                height: 170,
                width: 170,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                boxShadow: 2,
                borderRadius: 2,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up the card on hover
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
                }
              }}
            >
              <CardContent sx={{ width: '100%', p: 0.5, pt: 1, textAlign: 'center' }}>
                <QueryBuilderOutlinedIcon color="primary" sx={{ fontSize: 50, marginBottom: 1 }} />
                <Typography variant="body1"  fontWeight="bold" fontSize="1.1rem">
                  Response Time:
                </Typography>
                <Typography variant="body1" fontSize="1rem">
                  We aim to respond within 24 hours
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
          </div>
        </div>
    </div>
  );
}
