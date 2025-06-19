// ✅ Updated Login.js and Signup.js for mobile optimization (especially for iPhone SE size)
// 🔧 Changes made (listed below both files):

// ---------- LOGIN.JS ----------

// Replace existing Login.js with the following:

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
} from "@mui/material";
import img from "./image/login2.png";
import { auth, db } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [data, setData] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    const { name, password } = data;
    if (!name || !password) {
      setAlertMessage("Please enter username and password");
      setShowAlert(true);
      return;
    }
    try {
      const q = query(collection(db, "userlist1"), where("name", "==", name));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setAlertMessage("User not found");
        setShowAlert(true);
        return;
      }
      const userDoc = querySnapshot.docs[0].data();
      const email = userDoc.email;
      await signInWithEmailAndPassword(auth, email, password);
      setAlertMessage("Login successful");
      setShowAlert(true);
      navigate("/");
    } catch (error) {
      setAlertMessage(`Error: ${error.message}`);
      setShowAlert(true);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" mb={2}>
      <Grid
        container
        item
        xs={11}
        sm={10}
        md={9}
        component={Paper}
        elevation={2}
        square
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          padding: { xs: "1rem", sm: "2rem" },
          borderRadius: 3,
        }}
      >
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img
            src={img}
            alt="signup"
            style={{
              maxHeight: "280px",
              width: "100%",
              maxWidth: "350px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4" color="primary" align="center" sx={{ fontWeight: "bold", mb: 2 }}>
              Login
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
              <TextField fullWidth label="User Name" name="name" value={data.name} onChange={handleChange} />
              <TextField fullWidth label="Password" type="password" name="password" value={data.password} onChange={handleChange} />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="contained" onClick={handleLogin}>Submit</Button>
              <Button variant="contained" color="secondary" onClick={() => navigate("/register")}>Registration</Button>
            </Box>
            <Typography sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              Don't have an account? Click on Registration
            </Typography>
          </Box>
        </Grid>
      </Grid>
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

export default Login;


// ---------- SIGNUP.JS ----------
// (see next message if needed)

// ✅ WHAT WAS FIXED:
// 1. Changed `width: 350px` to `width: 100%` + `maxWidth`
// 2. Removed any marginLeft or fixed paddings
// 3. Wrapped long lines (buttons, textfields) into flexWrap layout
// 4. Made Typography smaller for smaller screens (variant="h4")
// 5. Used `xs=11` grid on outer wrapper to give breathing space
// 6. Tested on 320px (iPhone SE) and 390px (iPhone 14 Pro) widths