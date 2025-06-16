import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase-config";
import {
  collection, query, where, getDocs,
  doc, deleteDoc, updateDoc
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {
  Box, Typography, Paper, TextField, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, Grid
} from '@mui/material';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Mypet = () => {
  const [userPets, setUserPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPet, setEditingPet] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userId = user.uid;
        try {
          const q = query(collection(db, "buypetdetails"), where("uid", "==", userId));
          const querySnapshot = await getDocs(q);
          const pets = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUserPets(pets);
        } catch (error) {
          console.error("Error fetching pets:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.warn("No user logged in.");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (petId) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      try {
        await deleteDoc(doc(db, "buypetdetails", petId));
        setUserPets(prev => prev.filter(p => p.id !== petId));
      } catch (err) {
        console.error("Error deleting pet:", err);
      }
    }
  };

  const handleEditClick = (pet) => {
    setEditingPet(pet);
    setEditForm(pet);
  };

  const handleEditChange = (e) => {
    const { id, value } = e.target;
    setEditForm(prev => ({ ...prev, [id]: value }));
  };

  const handleEditSave = async () => {
    try {
      const petRef = doc(db, "buypetdetails", editingPet.id);
      await updateDoc(petRef, editForm);
      setUserPets(prev =>
        prev.map(p => (p.id === editingPet.id ? { ...p, ...editForm } : p))
      );
      setEditingPet(null);
    } catch (err) {
      console.error("Error updating pet:", err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Box className="container" sx={{ mb: 2 }}>
      <Typography variant="h4" sx={{ color: "orange", mb: 2 }}>My Pets List</Typography>

      {userPets.length === 0 ? (
        <p>No pets found.</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {["Owner Name", "Phone No", "Email", "Address", "City", "Pincode", "Pet Name", "Pet Breed", "Pet Age", "Pet Price", "Description", "Image", "Action"].map(header => (
                  <TableCell align="center" key={header}><b>{header}</b></TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userPets.map((pet, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{pet.ownerName}</TableCell>
                  <TableCell align="center">{pet.phone}</TableCell>
                  <TableCell align="center">{pet.email}</TableCell>
                  <TableCell align="center">{pet.address}</TableCell>
                  <TableCell align="center">{pet.city}</TableCell>
                  <TableCell align="center">{pet.zip}</TableCell>
                  <TableCell align="center">{pet.petName}</TableCell>
                  <TableCell align="center">{pet.petCategory}</TableCell>
                  <TableCell align="center">{pet.petAge}</TableCell>
                  <TableCell align="center">{pet.petPrice}</TableCell>
                  <TableCell align="center">{pet.description}</TableCell>
                  <TableCell align="center">
                    {pet.image ? (
                      <img src={pet.image} alt={pet.petName} style={{ width: "70px", height: "70px" }} />
                    ) : (
                      "No Image"
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                      <ModeEditOutlinedIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleEditClick(pet)}
                      />
                      <DeleteOutlinedIcon
                        sx={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(pet.id)}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editingPet} onClose={() => setEditingPet(null)} maxWidth="md">
        <DialogTitle>Edit Pet Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1, display:"flex", justifyContent:"space-evenly" }}>
            {[
              "ownerName", "phone", "email", "address", "city", "zip",
              "petName", "petCategory", "petbreed", "petAge", "petPrice", "description"
            ].map((field) => (
              <Grid item xs={12} sm={6} key={field}>
                <TextField
                  fullWidth
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  id={field}
                  value={editForm[field] || ""}
                  onChange={handleEditChange}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
            <Button onClick={() => setEditingPet(null)}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleEditSave}>
              Save Changes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Mypet;
