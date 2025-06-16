import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./firebase-config";

import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Snackbar,
  Alert
} from "@mui/material";

const Addapet = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    petName: "",
    petCategory: "",
    petbreed: "",
    petAge: "",
    petPrice: "",
    imageUpload: null,
    description: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      imageUpload: e.target.files[0],
    }));
  };

  const handleSubmit = async () => {
    if (!currentUser) {
      alert("You must be logged in to submit the form.");
      return;
    }

    try {
      let base64Image = "";

      if (formData.imageUpload) {
        base64Image = await convertToBase64(formData.imageUpload);
      }

      const newPet = {
        uid: currentUser.uid,
        ownerName: formData.ownerName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zip: formData.zip,
        petName: formData.petName,
        petCategory: formData.petCategory,
        petbreed: formData.petbreed,
        petAge: formData.petAge,
        petPrice: formData.petPrice,
        description: formData.description,
        image: base64Image,
      };

      const docRef = await addDoc(collection(db, "buypetdetails"), newPet);
      console.log("Pet added with ID:", docRef.id);

      setSubmittedData((prev) => [...prev, newPet]);

      setFormData({
        ownerName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        petName: "",
        petCategory: "",
        petbreed: "",
        petAge: "",
        petPrice: "",
        imageUpload: null,
        description: "",
      });

      document.getElementById("imageUpload").value = "";
      setShowAlert(true);
    } catch (error) {
      console.error("Error adding pet:", error);
      alert("Failed to add pet. Check the console for details.");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", fontFamily: "Times New Roman" }}>
        Sell a Pet Form
      </Typography>

      {/* Owner Details */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography sx={{ mb: 2, fontWeight: "bold" }} variant="h5" gutterBottom>
          Owner Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField type="text" fullWidth label="Full Name" id="ownerName" value={formData.ownerName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone No" id="phone" type="tel" value={formData.phone} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" id="email" type="email" value={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Address" id="address" value={formData.address} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="City" id="city" value={formData.city} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Pincode" id="zip" value={formData.zip} onChange={handleChange} />
          </Grid>
        </Grid>
      </Paper>

      {/* Pet Details */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography sx={{ mb: 2, fontWeight: "bold" }} variant="h5" gutterBottom>
          Pet Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Pet Name" id="petName" value={formData.petName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Pet Category" id="petCategory" value={formData.petCategory} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Pet Breed" id="petbreed" value={formData.petbreed} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Pet Age" id="petAge" type="number" value={formData.petAge} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Pet Price" id="petPrice" type="number" value={formData.petPrice} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Description" id="description" value={formData.description} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" component="label" fullWidth>
              Upload Pet Image
              <input type="file" hidden id="imageUpload" accept="image/*" onChange={handleFileChange} />
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Submit Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {/* Snackbar Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setShowAlert(false)}
      >
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Addapet;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { db } from './firebase-config'; // Ensure your Firebase configuration is correct
// import { collection, addDoc } from "firebase/firestore";
// import "./Addapet.css";
// import img1 from "./image/fh3.jpg";
// import img2 from './image/helo.jpg';

// // Utility function to convert an image to Base64
// const convertToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

// function Addapet() {
//   const [formData, setFormData] = useState({
//     ownerName: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     zip: "",
//     petName: "",
//     petCategory: "",
//     petAge: "",
//     petPrice: "",
//     imageUpload: null,
//     description: "",
//   });

//   const [submittedData, setSubmittedData] = useState([]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       imageUpload: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       let base64Image = "";

//       // Check if image exists and convert it to Base64 if present
//       if (formData.imageUpload) {
//         base64Image = await convertToBase64(formData.imageUpload);
//         console.log("Image converted to Base64:", base64Image);
//       }

//       // Prepare new pet data object to store in Firestore
//       const newPet = {
//         ownerName: formData.ownerName,
//         phone: formData.phone,
//         email: formData.email,
//         address: formData.address,
//         city: formData.city,
//         zip: formData.zip,
//         petName: formData.petName,
//         petCategory: formData.petCategory,
//         petAge: formData.petAge,
//         petPrice: formData.petPrice,
//         description: formData.description,
//         image: base64Image, // Store the Base64 image string
//       };

//       // Add new pet data to Firestore's 'buypetdetails' collection
//       const docRef = await addDoc(collection(db, "buypetdetails"), newPet);
//       console.log("Pet added with ID:", docRef.id);

//       // Update local submitted data list
//       setSubmittedData((prev) => [...prev, newPet]);

//       // Reset the form data after submission
//       setFormData({
//         ownerName: "",
//         phone: "",
//         email: "",
//         address: "",
//         city: "",
//         zip: "",
//         petName: "",
//         petCategory: "",
//         petAge: "",
//         petPrice: "",
//         imageUpload: null,
//         description: "",
//       });

//       // Clear file input manually
//       document.getElementById("imageUpload").value = "";
//     } catch (error) {
//       console.error("Error adding pet:", error);
//       alert("Failed to add pet. Check the console for details.");
//     }
//   };

//   return (
//     <div className="addapet-wrapper">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ y: -30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
//         style={{
//           height: "300px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           backgroundImage: `url(${img1})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           marginBottom: "10px",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//           whileHover={{ scale: 1.02 }}
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.85)",
//             padding: "10px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//             maxWidth: "45%",
//             marginLeft: "30px",
//             marginBottom: "10px",
//             cursor: "pointer",
//           }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             style={{
//               margin: 0,
//               fontSize: "1.8rem",
//               fontWeight: "600",
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             Find a Loving Home – Sell Your Pet with Us
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             style={{
//               marginTop: "8px",
//               fontSize: "1rem",
//               color: "#333",
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             Find the perfect match — connect your pet with a loving, responsible new home.
//           </motion.p>
//         </motion.div>
//       </motion.div>

//       <div className="container">
//         {/* Owner Details */}
//         <div className="mainc">
//           <div className="col-md-5">
//             <div className="form-section">
//               <h2 className="section-title">Details of Owner</h2>
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <label htmlFor="ownerName" className="form-label">Full Name</label>
//                   <input type="text" className="form-control" id="ownerName" value={formData.ownerName} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="phone" className="form-label">Phone No</label>
//                   <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="email" className="form-label">Email</label>
//                   <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="address" className="form-label">Address</label>
//                   <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="city" className="form-label">City</label>
//                   <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="zip" className="form-label">Pincode</label>
//                   <input type="text" className="form-control" id="zip" value={formData.zip} onChange={handleChange} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pet Details */}
//           <div className="col-md-5">
//             <div className="form-section">
//               <h2 className="section-title">Details of Pet</h2>
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <label htmlFor="petName" className="form-label">Pet Name</label>
//                   <input type="text" className="form-control" id="petName" value={formData.petName} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="petCategory" className="form-label">Pet Breed</label>
//                   <input type="text" className="form-control" id="petCategory" value={formData.petCategory} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="petAge" className="form-label">Pet Age</label>
//                   <input type="number" className="form-control" id="petAge" value={formData.petAge} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="petPrice" className="form-label">Pet Price</label>
//                   <input type="number" className="form-control" id="petPrice" value={formData.petPrice} onChange={handleChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="imageUpload" className="form-label">Upload Pet Image</label>
//                   <input type="file" className="form-control" id="imageUpload" accept="image/*" onChange={handleFileChange} />
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="description" className="form-label">Description</label>
//                   <input type="text" className="form-control" id="description" value={formData.description} onChange={handleChange} placeholder="Write a short description..." />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="submit-button-container" style={{ marginBottom: "10px" }}>
//         <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// export default Addapet;
