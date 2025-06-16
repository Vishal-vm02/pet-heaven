import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Grid,
  Alert
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
  const { cart, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const shippingCharge = 5000;

  const subtotal = cart.reduce((sum, pet) => {
    const price = parseFloat((pet.price || '0').toString().replace(/,/g, '')) || 0;
    return sum + price;
  }, 0);

  const total = subtotal + shippingCharge;

  const handleCheckout = () => {
    if (!user) {
      setError(true);
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold">
        Cart Items
      </Typography>

      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          Please log in to proceed to checkout.
        </Alert>
      )}

      {cart.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="error" sx={{ mt: 3 }}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Box sx={{ flex: 2, mt: 3 }}>
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
                  {cart.map((pet, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">
                        {pet.image ? (
                          <img src={pet.image} alt={pet.name} style={{ width: "70px", height: "70px" }} />
                        ) : "No Image"}
                      </TableCell>
                      <TableCell align="center">{pet.name}</TableCell>
                      <TableCell align="center">{pet.age}</TableCell>
                      <TableCell align="center">
                        ₹ {parseFloat((pet.price || '0').toString().replace(/,/g, '')).toLocaleString()}
                      </TableCell>
                      <TableCell align="center">{pet.description}</TableCell>
                      <TableCell align="center">
                        <DeleteOutlinedIcon
                          color="error"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeFromCart(index)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ mt: 4, p: 2, border: '1px dashed #ccc', borderRadius: 2, width: "700px" }}>
              <Typography fontWeight="bold" variant="h4" color='green' textAlign="center">Cart Totals:</Typography>
              <Typography variant="h6"><strong>Subtotal:</strong> ₹ {subtotal.toLocaleString()}</Typography>
              <Typography variant="h6"><strong>Shipping Charge:</strong> ₹ {shippingCharge.toLocaleString()}</Typography>
              <Typography variant="h5" fontWeight="bold"><strong>Total:</strong> ₹ {total.toLocaleString()}</Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={handleCheckout}
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 25, mr: 1 }} />
                  Proceed to Checkout
                </Button>
              </Box>
            </Box>
          </Grid>
        </>
      )}
    </div>
  );
};

export default AddToCart;
