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
  const [data, setData] = useState({
    name: "", // Username
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { name, password } = data;

    if (!name || !password) {
      setAlertMessage("Please enter username and password");
      setShowAlert(true);
      return;
    }

    try {
      // Step 1: Get email from Firestore using username
      const q = query(collection(db, "userlist1"), where("name", "==", name));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setAlertMessage("User not found");
        setShowAlert(true);
        return;
      }

      const userDoc = querySnapshot.docs[0].data();
      const email = userDoc.email;

      // Step 2: Login using email & password
      await signInWithEmailAndPassword(auth, email, password);
      setAlertMessage("Login successful");
      setShowAlert(true);
      navigate("/"); // Redirect to home or dashboard
    } catch (error) {
      console.error("Login error:", error.message);
      setAlertMessage(`Error: ${error.message}`);
      setShowAlert(true);
    }
  };

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
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", ml: 2 }}>
          <img
            src={img}
            alt="signup"
            style={{
              height: "280px",
              width: "350px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h3" color="primary" align="center" sx={{ fontWeight: "bold", mb: 2 }}>
              Login
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
              <TextField
                fullWidth
                label="User Name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
              <Button variant="contained" onClick={handleLogin}>
                Submit
              </Button>
              <Button variant="contained" color="secondary" onClick={() => { navigate("/register") }}>
                Registration
              </Button>
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
