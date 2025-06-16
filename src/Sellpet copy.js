// import React, { useState } from "react";
// import { collection, addDoc } from 'firebase/firestore';
// import { Auth } from './auth';
// import { db } from './firebase-config';


// import {
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Snackbar,
//   Alert
// } from "@mui/material";

// const Addapet = () => {
//   const [formData, setFormData] = useState({
//     ownerName: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     zip: "",
//     petName: "",
//     petCategory: "",
//     petbreed: "", // <-- FIXED
//     petAge: "",
//     petPrice: "",
//     imageUpload: null,
//     description: "",
//   });
  

//   const [submittedData, setSubmittedData] = useState([]);
//   const [showAlert, setShowAlert] = useState(false);

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
//       const dataToSubmit = {
//         fullname: formData.ownerName,
//         phone: formData.phone,
//         email: formData.email,
//         address: formData.address,
//         city: formData.city,
//         pincode: formData.zip,
//         petname: formData.petName,
//         petcategory: formData.petCategory,
//         petbreed: formData.petbreed,
//         petage: Number(formData.petAge),
//         petprice: Number(formData.petPrice),
//         description: formData.description,
//         image: formData.imageUpload ? formData.imageUpload.name : "", // 🔥 Use Firebase Storage for full image upload later
//       };
  
//       // Add to Firestore
//       await addDoc(collection(db, "buypetdetails"), dataToSubmit);
  
//       // Update local state for table display
//       setSubmittedData((prev) => [...prev, formData]);
  
//       // Reset form
//       setFormData({
//         ownerName: "",
//         phone: "",
//         email: "",
//         address: "",
//         city: "",
//         zip: "",
//         petName: "",
//         petCategory: "",
//         petbreed: "",
//         petAge: "",
//         petPrice: "",
//         imageUpload: null,
//         description: "",
//       });
  
//       document.getElementById("imageUpload").value = "";
//       setShowAlert(true);
//     } catch (error) {
//       console.error("Error submitting form to Firestore:", error);
//     }
//   };
  
//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom sx={{fontWeight:"bold", fontFamily:"times new roamn"}} >
//         Sell a Pet Form
//       </Typography>

//       <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//         <Typography sx={{mb:2, fontWeight:"bold",}} variant="h5" gutterBottom>
//           Owner Details
//         </Typography>
//         <Grid container spacing={2}>
//           {[
//             { id: "ownerName", label: "Full Name" },
//             { id: "phone", label: "Phone No", type: "tel" },
//             { id: "email", label: "Email", type: "email" },
//             { id: "address", label: "Address" },
//             { id: "city", label: "City" },
//             { id: "zip", label: "Pincode" },
//           ].map(({ id, label, type = "text" }) => (
//             <Grid item xs={12} sm={6} key={id}>
//               <TextField
//                 fullWidth
//                 id={id}
//                 label={label}
//                 value={formData[id]}
//                 onChange={handleChange}
//                 type={type}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Paper>

//       <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//         <Typography sx={{mb:2, fontWeight:"bold"}} variant="h5" gutterBottom>
//           Pet Details
//         </Typography>
//         <Grid container spacing={2}>
//           {[
//             { id: "petName", label: "Pet Name" },
//             { id: "petCategory", label: "Pet Category" },

//             { id: "petbreed", label: "Pet Breed" },
//             { id: "petAge", label: "Pet Age", type: "number" },
//             { id: "petPrice", label: "Pet Price", type: "number" },
//             { id: "description", label: "Description" },
//           ].map(({ id, label, type = "text" }) => (
//             <Grid item xs={12} sm={6} key={id}>
//               <TextField
//                 fullWidth
//                 id={id}
//                 label={label}
//                 value={formData[id]}
//                 onChange={handleChange}
//                 type={type}
//               />
//             </Grid>
//           ))}
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               component="label"
//               fullWidth
//             >
//               Upload Pet Image
//               <input
//                 type="file"
//                 hidden
//                 id="imageUpload"
//                 accept="image/*"
//                 onChange={handleFileChange}
//               />
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Box>

//       {submittedData.length > 0 && (
//         <Box>
//           <Typography variant="h5" gutterBottom sx={{mb:2, fontWeight:"bold"}}>
//             Submitted Data
//           </Typography>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {[
//                     "Owner Name",
//                     "Phone",
//                     "Email",
//                     "Address",
//                     "City",
//                     "Zip",
//                     "Pet Name",
//                     "Pet Category",
//                     "Pet Breed",
//                     "Age",
//                     "Price",
//                     "Description",
//                     "Image",
//                   ].map((head) => (
//                     <TableCell key={head}>{head}</TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {submittedData.map((item, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{item.ownerName}</TableCell>
//                     <TableCell>{item.phone}</TableCell>
//                     <TableCell>{item.email}</TableCell>
//                     <TableCell>{item.address}</TableCell>
//                     <TableCell>{item.city}</TableCell>
//                     <TableCell>{item.zip}</TableCell>
//                     <TableCell>{item.petName}</TableCell>
//                     <TableCell>{item.petCategory}</TableCell>
//                     <TableCell>{item.petbreed}</TableCell>
//                     <TableCell>{item.petAge}</TableCell>
//                     <TableCell>{item.petPrice}</TableCell>
//                     <TableCell>{item.description}</TableCell>
//                     <TableCell>
//                       {item.imageUpload ? (
//                         <img
//                           src={URL.createObjectURL(item.imageUpload)}
//                           alt="pet"
//                           width="60"
//                           height="60"
//                           style={{ objectFit: "cover", borderRadius: "4px" }}
//                         />
//                       ) : (
//                         "No Image"
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       )}

//       <Snackbar
//         open={showAlert}
//         autoHideDuration={3000}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         onClose={() => setShowAlert(false)}
//       >
//         <Alert severity="success" onClose={() => setShowAlert(false)}>
//           Form submitted successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default Addapet;

import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Addapet.css";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from '@mui/material';
import img1 from "./fh3.jpg";
import img2 from './helo.jpg'

  
function Addapet() {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    petName: "",
    petCategory: "",
    petAge: "",
    petPrice: "",
    imageUpload: null,
    description: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

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

  const handleSubmit = () => {
    setSubmittedData((prev) => [...prev, formData]);

    // Reset form
    setFormData({
      ownerName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      petName: "",
      petCategory: "",
      petAge: "",
      petPrice: "",
      imageUpload: null,
      description: "",
    });

    // Clear file input manually
    document.getElementById("imageUpload").value = "";
  };

  return (
    <div className="addapet-wrapper">
      {/* <h2 className="title">Sell a Pet Form</h2> */}

<motion.div
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
  style={{
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundImage: `url(${img1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop:"10px",
    marginBottom:"10px",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    whileHover={{ scale: 1.02 }}
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      padding: "16px 24px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      maxWidth: "45%",
      marginLeft: "30px",
      marginBottom: "10px",
      cursor: "pointer"
    }}
  >
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        margin: 0,
        fontSize: "1.8rem",
        fontWeight: "600",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      Find a Loving Home – Sell Your Pet with Us
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      style={{
        marginTop: "8px",
        fontSize: "1rem",
        color: "#333",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      Find the perfect match — connect your pet with a loving, responsible new home.
    </motion.p>
  </motion.div>
</motion.div>




      <div className="container" >
      
        {/* Owner Details */}
        <div className="mainc">
        

        
        <div className="col-md-5">
          {/* <div
                  style={{
                    height: "300px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 10,
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop: 2,
                  }}
                >hello</div> */}
        <div className="form-section">
          <h2 className="section-title">Details of Owner</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="ownerName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="ownerName" value={formData.ownerName} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone No</label>
              <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="zip" className="form-label">Pincode</label>
              <input type="text" className="form-control" id="zip" value={formData.zip} onChange={handleChange} />
            </div>
          </div>
        </div>
        </div>

        {/* Pet Details */}
        <div className="col-md-5">
        {/* <div
                  style={{
                    backgroundSize: "cover",             
  backgroundPosition: "center",         
  backgroundRepeat:" no-repeat",  
                    height: "300px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 10,
                    backgroundImage: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop: 2,
                  }}
                >
            hello2
          </div> */}
        
        <div className="form-section">
          <h2 className="section-title">Details of Pet</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="petName" className="form-label">Pet Name</label>
              <input type="text" className="form-control" id="petName" value={formData.petName} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="petCategory" className="form-label">Pet Breed</label>
              <input type="text" className="form-control" id="petCategory" value={formData.petCategory} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="petAge" className="form-label">Pet Age</label>
              <input type="number" className="form-control" id="petAge" value={formData.petAge} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="petPrice" className="form-label">Pet Price</label>
              <input type="number" className="form-control" id="petPrice" value={formData.petPrice} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="imageUpload" className="form-label">Upload Pet Image</label>
              <input type="file" className="form-control" id="imageUpload" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" className="form-control" id="description" value={formData.description} onChange={handleChange} placeholder="Write a short description..." />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      {/* Submit Button */}
      <div className="submit-button-container">
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>

      {/* Data Table */}
      {submittedData.length > 0 && (
  <div className="table-container">
    <h3 className="section-title">Submitted Data</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="submitted pet data table">
        <TableHead>
          <TableRow>
            <TableCell>Owner Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Zip</TableCell>
            <TableCell>Pet Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submittedData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.ownerName}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.zip}</TableCell>
              <TableCell>{item.petName}</TableCell>
              <TableCell>{item.petCategory}</TableCell>
              <TableCell>{item.petAge}</TableCell>
              <TableCell>{item.petPrice}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                {item.imageUpload ? (
                  <img
                    src={URL.createObjectURL(item.imageUpload)}
                    alt="pet"
                    width="60"
                    height="60"
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                  />
                ) : (
                  "No Image"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)}

    </div>
  );
}

export default Addapet;