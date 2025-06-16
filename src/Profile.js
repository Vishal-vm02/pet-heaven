import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Avatar, Typography, Paper, Box, CircularProgress } from "@mui/material";
import img2 from './image/man.png'


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "userlist1", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("User document not found.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user is logged in.");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!userData) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h6">No user data found.</Typography>
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 4, mb:2 }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Avatar src={img2} sx={{ width: 80, height: 80 }} />
        <Typography variant="h5">{userData.name}</Typography>
        </Box>
        <Box  elevation={3} display="flex" flexDirection="column" gap={2} >
        <Typography variant="body1">📧 {userData.email}</Typography>
        <Typography variant="body1">📱 {userData.number}</Typography>
        <Typography variant="body1">⚧️ {userData.gender}</Typography>
        <Typography variant="body2" color="textSecondary">
          Registered on: {new Date(userData.createdAt).toLocaleString()}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
