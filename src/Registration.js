import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Snackbar,
  Alert,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { motion } from "framer-motion";
import img from "./image/opi1.jpeg";

import { auth, db } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Firestore methods

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "male",
  });

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSignup = async () => {
  const { name, email, password, number, gender } = data;

  if (!name || !email || !password || !number || !gender) {
    setAlertMessage("All fields are required.");
    setShowAlert(true);
    return;
  }

  // Validate password length
  if (password.length < 6) {
    setAlertMessage("Password must be at least 6 characters long.");
    setShowAlert(true);
    return;
  }

  // Validate email format
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    setAlertMessage("Please enter a valid email address.");
    setShowAlert(true);
    return;
  }

  try {
    console.log("📤 Creating user with email and password...");
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("✅ User created:", user.uid);

    console.log("📝 Writing user data to Firestore...");
    await setDoc(doc(db, "userlist1", user.uid), {
      uid: user.uid,
      name,
      email,
      number,
      gender,
      createdAt: new Date().toISOString(),
    });

    console.log("✅ Firestore write successful.");

    setAlertMessage("✅ Registration successful. You can now login.");
    setShowAlert(true);

    setData({
      name: "",
      email: "",
      password: "",
      number: "",
      gender: "male",
    });

  } catch (error) {
    console.error("❌ Error during signup:", error.code, error.message);
    setAlertMessage(`Error: ${error.message}`);
    setShowAlert(true);
  }
};

// console.log("✅ User created:", user.uid);
// console.log("✅ Firestore write successful.");



  return (
    
    <Grid container justifyContent="center" alignItems="center" mb={2}>
      <Grid
        container
        item
        xs={12}
        sm={10}
        md={9}
        component={Paper}
        elevation={2}
        square
        sx={{
          display: "flex",
          height: "auto",
          flexDirection: { xs: "column", md: "row-reverse" },
          padding: "2rem",
          borderRadius: 3,
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "1rem" }}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={img}
              alt="signup"
              style={{
                height: "480px",
                width: "350px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ width: "100%" }}
          >
            <Typography variant="h3" color="primary" align="center" sx={{ fontWeight: "bold", mb: 2 }}>
              Registration
            </Typography>

            {/* Name */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                fullWidth
                label="User Name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </Box>

            {/* Email + Password */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
             
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
               <TextField
                fullWidth
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Box>

            {/* Phone + Gender */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
              <TextField
                fullWidth
                label="Phone No"
                name="number"
                value={data.number}
                onChange={handleChange}
              />
              <FormControl fullWidth>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={data.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="contained" onClick={handleSignup}>
                  Submit
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="contained" color="secondary" onClick={() => navigate("/login")}>
                  Login
                </Button>
              </motion.div>
            </Box>

            <Typography sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              Already have an account? Click on Login
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Alert Snackbar */}
      <Snackbar
        open={showAlert}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setShowAlert(false)}
      >
        <Alert severity={alertMessage.includes("Error") ? "error" : "success"} onClose={() => setShowAlert(false)}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Signup;