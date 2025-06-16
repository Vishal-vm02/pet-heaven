import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Paper
} from '@mui/material';

import { db } from './firebase-config'; // Make sure this path is correct
import { collection, addDoc } from 'firebase/firestore';

function Adoptform() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    petName: '',
    petAge: '',
    petDescription: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    residenceType: '',
    homeOwnership: '',
    fencedYard: '',
    householdSize: '',
    ownedPets: '',
    hasPets: '',
    petTypes: '',
    commitment: '',
    agreeVisit: false,
    notes: ''
  });

  useEffect(() => {
   
    const petFromState = location.state;
    const petFromStorage = localStorage.getItem('selectedPet');

    if (petFromState) {
      localStorage.setItem('selectedPet', JSON.stringify(petFromState));
      setFormData((prev) => ({
        ...prev,
        petName: petFromState.name || '',
        petAge: petFromState.age || '',
        petDescription: petFromState.description || ''
      }));
    } else if (petFromStorage) {
      const parsedPet = JSON.parse(petFromStorage);
      setFormData((prev) => ({
        ...prev,
        petName: parsedPet.name || '',
        petAge: parsedPet.age || '',
        petDescription: parsedPet.description || ''
      }));
    }
  }, [location.state]);
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'adoptformlist'), formData);
      alert('Application submitted successfully!');
      navigate("/")
      
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to submit application.');
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginBottom: "15px" }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="primary">
          Pet Adopt Form
        </Typography>

        <Box sx={{ mt: 2, mb: 3, p: 2, border: '1px dashed #ccc', borderRadius: 2 }}>
          <Typography fontWeight={"bold"} variant="h6" color='Green'>You're adopting:</Typography>
          <Typography><strong>Name:</strong> {formData.petName}</Typography>
          <Typography><strong>Age:</strong> {formData.petAge}</Typography>
          <Typography><strong>Description:</strong> {formData.petDescription}</Typography>
        </Box>

        <Box sx={{ borderColor: 'divider', borderRadius: 1, p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Personal Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField fullWidth label="Full Name" variant="outlined" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Email Address" variant="outlined" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Phone Number" variant="outlined" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Address" variant="outlined" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="City" variant="outlined" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="State" variant="outlined" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Zip Code" variant="outlined" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} /></Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom fontWeight="bold">Home & Lifestyle Info</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl sx={{width:"180px"}} fullWidth>
                    <InputLabel>Type of Residence</InputLabel>
                    <Select value={formData.residenceType} label="Type of Residence" onChange={(e) => setFormData({ ...formData, residenceType: e.target.value })}>
                      <MenuItem value="apartment">Apartment</MenuItem>
                      <MenuItem value="house">House</MenuItem>
                      <MenuItem value="condo">Condo</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="legend">Do you own or rent your home?</Typography>
                  <RadioGroup row value={formData.homeOwnership} onChange={(e) => setFormData({ ...formData, homeOwnership: e.target.value })}>
                    <FormControlLabel value="own" control={<Radio />} label="Own" />
                    <FormControlLabel value="rent" control={<Radio />} label="Rent" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="legend">Do you have a fenced yard?</Typography>
                  <RadioGroup row value={formData.fencedYard} onChange={(e) => setFormData({ ...formData, fencedYard: e.target.value })}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Number of people in household" type="number" variant="outlined" value={formData.householdSize} onChange={(e) => setFormData({ ...formData, householdSize: e.target.value })} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ borderColor: 'divider', borderRadius: 1, p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom fontWeight="bold">Pet Experience</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="legend">Have you owned pets before?</Typography>
                  <RadioGroup row value={formData.ownedPets} onChange={(e) => setFormData({ ...formData, ownedPets: e.target.value })}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="legend">Do you currently have other pets?</Typography>
                  <RadioGroup row value={formData.hasPets} onChange={(e) => setFormData({ ...formData, hasPets: e.target.value })}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="If yes, what kind?" variant="outlined" value={formData.petTypes} onChange={(e) => setFormData({ ...formData, petTypes: e.target.value })} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom fontWeight="bold">Commitment & Agreement</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="legend">Are you ready to commit to this pet's lifetime?</Typography>
                  <RadioGroup row value={formData.commitment} onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox checked={formData.agreeVisit} onChange={(e) => setFormData({ ...formData, agreeVisit: e.target.checked })} />}
                    label="I agree to a home visit or follow-up"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Additional notes or comments" variant="outlined" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" size="large" color="primary" onClick={handleSubmit}>
            Submit Application
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Adoptform;
