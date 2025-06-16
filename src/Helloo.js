import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Container,
  Paper,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { db, storage } from "./firebase-config"; // make sure the path is correct
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
// import Cform from "./Cform";

function ElectronicForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    pin: "",
    description: "",
    deviceType: "",
    brand: "",
    os: "",
    accessories: "",
    battery: "",
    location: "",
    deliveryOptions: {
      pickup: false,
      courier: false,
      owner: false,
    },
    distance: "",
    restrictions: "",
    securityDeposit: {
      yes: false,
      no: false,
    },
    imageBase64: "",
    imageUrl: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (group, field) => {
    setFormData((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [field]: !prev[group][field],
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        imageBase64: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      let imageUrl = "";

      if (formData.imageBase64) {
        const imageRef = ref(storage, `electronics/${Date.now()}.jpg`);
        await uploadString(imageRef, formData.imageBase64, "data_url");
        imageUrl = await getDownloadURL(imageRef);
      }

      const dataToSave = {
        ...formData,
        imageUrl,
        imageBase64: "", // don't store base64 in Firestore
        createdAt: new Date(),
      };

      await addDoc(collection(db, "electronics"), dataToSave);

      alert("Submitted successfully!");
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Upload failed. Check console.");
    }
  };

  return (
    <Box sx={{ mt: 13 }}>
      {/* <Cform /> */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 2, mt: 3 }}
        color="primary"
      >
        Sell an Electronic Item
      </Typography>

      <Grid spacing={1} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: "100%", width: "380px" }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "Bold" }}>
                Owner Details
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField label="Full Name" fullWidth onChange={(e) => handleChange("fullName", e.target.value)} />
                <TextField label="Phone Number" fullWidth onChange={(e) => handleChange("phone", e.target.value)} />
                <TextField label="Email Address" fullWidth onChange={(e) => handleChange("email", e.target.value)} />
                <TextField label="City" fullWidth onChange={(e) => handleChange("city", e.target.value)} />
                <TextField label="Pin Code" fullWidth onChange={(e) => handleChange("pin", e.target.value)} />
                <TextField
                  label="Item Description (brand, condition, etc.)"
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "Bold" }}>
                Electronic Item Details
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box display="flex" flexDirection="row" gap={1}>
                  <FormControl fullWidth>
                    <InputLabel>Device Type</InputLabel>
                    <Select
                      label="Device Type"
                      defaultValue=""
                      onChange={(e) => handleChange("deviceType", e.target.value)}
                    >
                      <MenuItem value="laptop">Laptop</MenuItem>
                      <MenuItem value="camera">Camera</MenuItem>
                      <MenuItem value="drone">Drone</MenuItem>
                      <MenuItem value="phone">Phone</MenuItem>
                      <MenuItem value="console">Gaming Console</MenuItem>
                      <MenuItem value="tv">TV</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField label="Brand / Model" fullWidth onChange={(e) => handleChange("brand", e.target.value)} />
                  <FormControl fullWidth>
                    <InputLabel>Operating System</InputLabel>
                    <Select
                      label="Operating System"
                      defaultValue=""
                      onChange={(e) => handleChange("os", e.target.value)}
                    >
                      <MenuItem value="android">Android</MenuItem>
                      <MenuItem value="ios">iOS</MenuItem>
                      <MenuItem value="windows">Windows</MenuItem>
                      <MenuItem value="macos">macOS</MenuItem>
                      <MenuItem value="linux">Linux</MenuItem>
                      <MenuItem value="harmonyos">HarmonyOS</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box display="flex" flexDirection="row" gap={1}>
                  <TextField label="Accessories Included" fullWidth onChange={(e) => handleChange("accessories", e.target.value)} />
                  <TextField label="Battery Health" fullWidth onChange={(e) => handleChange("battery", e.target.value)} />
                  <TextField label="Item Location" fullWidth onChange={(e) => handleChange("location", e.target.value)} />
                </Box>

                <FormGroup row>
                  <Typography variant="h6" mt={1}>
                    Delivery Options
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox checked={formData.deliveryOptions.pickup} onChange={() => handleCheckboxChange("deliveryOptions", "pickup")} />}
                    label="Pickup"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={formData.deliveryOptions.courier} onChange={() => handleCheckboxChange("deliveryOptions", "courier")} />}
                    label="Courier"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={formData.deliveryOptions.owner} onChange={() => handleCheckboxChange("deliveryOptions", "owner")} />}
                    label="Owner Delivery"
                  />
                </FormGroup>

                <TextField label="Max Distance for Delivery" fullWidth onChange={(e) => handleChange("distance", e.target.value)} />
                <TextField label="Technical Restrictions" multiline rows={3} fullWidth onChange={(e) => handleChange("restrictions", e.target.value)} />

                <Box display="flex" flexDirection="row" gap={1}>
                  <Typography variant="h6" mt={1}>
                    Security Deposit
                  </Typography>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox checked={formData.securityDeposit.yes} onChange={() => handleCheckboxChange("securityDeposit", "yes")} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={formData.securityDeposit.no} onChange={() => handleCheckboxChange("securityDeposit", "no")} />}
                      label="No"
                    />
                  </FormGroup>
                </Box>

                {/* Image Upload */}
                <Box>
                  <Typography variant="h6">Upload Image</Typography>
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  {formData.imageBase64 && (
                    <img
                      src={formData.imageBase64}
                      alt="Preview"
                      style={{
                        marginTop: "10px",
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Container>
      </Grid>

      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default ElectronicForm;
