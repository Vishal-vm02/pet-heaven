import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./Mainpage1";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Select from './Select';
import Motion from "./Motion";
import Contact from "./Contact";
import Adopt from "./Adopt";
import Sellpet from "./Sellpet";
import Home from "./Home";
import Buypet from "./Buypet";
import Wishlist from "./Wishlist";
import AddToCart from "./Addtocart";
import Help from "./Help";
import Login from "./Login";
import Registration from './Registration';
import Shipping from "./shipping";
import Dog from './pet/Dog';
import Cat from './pet/Cat';
import Rabbit from "./pet/Rabbit";
import Turtles from "./pet/Turtles";
import Birds from "./pet/Birds";
import Categories from "./Categories";
import Petshift from "./Petshift";
import Donation from "./Donation";
import Mypet from "./Mypet";
import TermS from "./TermsandConditions";
import Privacy from "./Privacy";
import { WishlistProvider } from "./WishlistContext";
import { CartProvider } from './CartContext';
import Checkout from "./Checkout";
import Adoptform from "./Adoptform";
import Profile from "./Profile";
import { AuthProvider } from "./AuthContext"; // ✅ Add this

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap everything in AuthProvider */}
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/petshift" element={<Petshift />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/motion" element={<Motion />} />
              <Route path="/select" element={<Select />} />
              <Route path="/adopt" element={<Adopt />} />
              <Route path="/sellpet" element={<Sellpet />} />
              <Route path="/buypet" element={<Buypet />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/addtocart" element={<AddToCart />} />
              <Route path="/help" element={<Help />} />
              <Route path="/dog" element={<Dog />} />
              <Route path="/cat" element={<Cat />} />
              <Route path="/birds" element={<Birds />} />
              <Route path="/rabbit" element={<Rabbit />} />
              <Route path="/turtles" element={<Turtles />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/mypet" element={<Mypet />} />
              <Route path="/termS" element={<TermS />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/adoptfrom" element={<Adoptform />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
