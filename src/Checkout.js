import React, { useState } from 'react';
import {
  Box, TableContainer, Paper, Table, TableHead, TableRow,
  TableCell, TableBody, Typography, Button, TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { db } from './firebase-config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const shippingCharge = 5000;

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    note: ''
  });

  // Calculate subtotal
  const subtotal = cart.reduce((sum, pet) => {
    const price = parseFloat((pet.price || '0').toString().replace(/,/g, '')) || 0;
    return sum + price;
  }, 0);
  const total = subtotal + shippingCharge;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        customer: formData,
        cartItems: cart,
        subtotal,
        shippingCharge,
        total,
        createdAt: Timestamp.now()
      };

      await addDoc(collection(db, 'ordertable'), orderData);

      alert('Order placed successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Try again.');
    }
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom textAlign="center" fontWeight="bold">
        Checkout
      </Typography>

      <div className='container' style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", padding: "15px", gap: "10px", flexWrap:"wrap" }}>
        {/* LEFT SIDE - FORM */}
        <div className='col-md-6' style={{ padding: "15px" }}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>Customer Info</Typography>
          <Box display="flex" flexDirection="row" gap={2}>
            <TextField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />
            <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth />
          </Box>

          <Typography mt={1} variant="h5" gutterBottom fontWeight="bold" color='warning'>Shipping Address</Typography>
          <Box display="flex" flexDirection="row" gap={2}>
            <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth />
            <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth />
          </Box>

          <Box display="flex" flexDirection="row" gap={2} mt={1}>
            <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth multiline rows={3} />
          </Box>

          <Box display="flex" flexDirection="row" gap={2} mt={1}>
            <TextField label="City" name="city" value={formData.city} onChange={handleChange} fullWidth />
            <TextField label="State" name="state" value={formData.state} onChange={handleChange} fullWidth />
            <TextField label="Zip Code" name="zip" value={formData.zip} onChange={handleChange} fullWidth />
          </Box>

          <Box display="flex" flexDirection="row" gap={2} mt={1}>
            <TextField
              label="Shipping Note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              helperText="Is there any order specification or delivery instruction you'd like us to know?"
            />
          </Box>
        </div>

        {/* RIGHT SIDE - ORDER TABLE */}
        <div className='col-md-4' style={{ padding: "15px" }}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>Your Order</Typography>
          <Box sx={{ flex: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Pet Name</b></TableCell>
                    <TableCell align="center"><b>Price</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((pet, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{pet.name}</TableCell>
                      <TableCell align="center">₹ {parseFloat((pet.price || '0').toString().replace(/,/g, '')).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Cart Subtotal</b></TableCell>
                    <TableCell align="center">₹ {subtotal.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center"><b>Shipping</b></TableCell>
                    <TableCell align="center">₹ {shippingCharge.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center"><b>Order Total</b></TableCell>
                    <TableCell align="center">₹ {total.toLocaleString()}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Button variant="contained" size="large" color="primary" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </Box>
    </div>
  );
}

export default Checkout;

