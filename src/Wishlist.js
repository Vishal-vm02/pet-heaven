import React from 'react';
import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (pet) => {
    addToCart(pet);
    // navigate('/addtocart');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
        My Wishlist
      </Typography>
      <Box sx={{ flex: 2 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"><b>Image</b></TableCell>
                <TableCell align="center"><b>Pet Name</b></TableCell>
                <TableCell align="center"><b>Age</b></TableCell>
                <TableCell align="center"><b>Price</b></TableCell>
                <TableCell align="center"><b>Description</b></TableCell>
                <TableCell align="center"><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlist.map((pet, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    {pet.image ? (
                      <img src={pet.image} alt={pet.name} style={{ width: "70px", height: "70px" }} />
                    ) : "No Image"}
                  </TableCell>
                  <TableCell align="center">{pet.name}</TableCell>
                  <TableCell align="center">{pet.age}</TableCell>
                  <TableCell align="center">{pet.price}</TableCell>
                  <TableCell align="center">{pet.description}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                      <DeleteOutlinedIcon
                        onClick={() => removeFromWishlist(pet.id)}
                        color="error"
                        style={{ cursor: "pointer" }}
                      />
                      <ShoppingCartOutlinedIcon
                        onClick={() => handleAddToCart(pet)}
                        color="primary"
                        style={{ cursor: "pointer" }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Wishlist;
