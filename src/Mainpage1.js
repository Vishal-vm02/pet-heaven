import React from "react";
import {useNavigate} from "react-router-dom"
import img from "./image/pet1.png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import img2 from './image/man.png'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Badge, IconButton, Link, Typography } from "@mui/material";
import { useWishlist } from './WishlistContext'; // import the context hook
import { useCart } from './CartContext'; // ✅ Make sure this is correct
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config"; // adjust path if needed
function MainPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);

const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
};
 const { wishlist } = useWishlist(); // get wishlist items
const handleMenuClose = () => {
    setAnchorEl(null);
};
 const { cart } = useCart(); // 👈 Get cart items from context
  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/aboutus" },
    { name: "Pet Categories", route: "/categories" },
    { name: "My Pet", route: "/mypet" },
    { name: "Contact", route: "/contact" },

  ];

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/login"); // redirect to login page after logout
    console.log("✅ User signed out successfully.");
  } catch (error) {
    console.error("❌ Error signing out:", error);
  }
};

  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
  {/* Topbar (Fixed) */}
  <div
    className="d-none d-md-block"
    style={{
      backgroundColor: "#f8f9fc",
      fontSize: "14px",
      padding: "5px 0",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 9999,
    }}
  >
    <div
      className="d-flex justify-content-around align-items-center flex-wrap px-2"
      style={{ height: "auto" }}
    >
      {/* Left: Contact Info */}
      <div className="d-flex align-items-center gap-2" style={{ fontSize: "14px" }}>
        <i className="bi bi-telephone text-primary"></i>
        <span>90231 27367</span>
        <i className="bi bi-geo-alt text-primary ms-3"></i>
        <span>Ratnakar Apartment, Ahmedabad-38005, India</span>
      </div>

      {/* Right: Language, Currency, Account */}
      <div className="d-flex align-items-center gap-3">
        <a
          href="#"
          className="text-decoration-none text-dark"
          style={{ fontSize: "14px", fontWeight: "" }}
        >
          🐾 Give Love, Get Love
        </a>
      </div>
    </div>
  </div>

  {/* Main Navbar (Fixed) */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" 
    style={{
      position: "fixed",
      top: "30px", // Adjust this value according to the height of your topbar
      width: "100%",
      zIndex: 9999,
    }}
  >
    <div
      className="container-fluid"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" onClick={()=>navigate("/")} >
        <img src={img} alt="Logo" width="40" height="40" />
        <span className="ms-2 fw-bold fs-4">
          Pet Heaven</span>
      </a>

      {/* Toggler Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Collapsible Menu */}
    <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
      <ul className="navbar-nav gap-3 mt-lg-0">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.name}>
            <a
              className="nav-link hover-link"
              style={{ fontSize: "17.5px", fontWeight: "bold" }}
              onClick={() => navigate(item.route)}
            >
              {item.name}
            </a>
          </li>
        ))}

        {/* Explore Dropdown */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle hover-link"
            href="#"
            id="exploreDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ fontSize: "17.5px", fontWeight: "bold" }}
          >
            Explore
          </a>
          <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
            <li><a className="dropdown-item" onClick={() => navigate("/adopt")}>Adopt</a></li>
            <li><a className="dropdown-item" onClick={() => navigate("/buypet")}>Buy a Pet</a></li>
            <li><a className="dropdown-item" onClick={() => navigate("/petshift")}>Buy Pet From Owner</a></li>
            <li><a className="dropdown-item" onClick={() => navigate("/sellpet")}>Sell a Pet</a></li>
            {/* <li><a className="dropdown-item" onClick={() => navigate("/mypet")}>My</a></li> */}

          </ul>
        </li>
      </ul>
    </div>
      {/* Right-side Icons */}
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton color="inherit">
           <Badge badgeContent={wishlist.length} color="primary" showZero>
      <FavoriteBorderIcon
        onClick={() => navigate("/wishlist")}
        sx={{ cursor: "pointer", fontSize: 30 }}
      />
    </Badge>
        </IconButton>
         <IconButton color="inherit" >
      <Badge badgeContent={cart.length} color="success" showZero>
        <ShoppingCartOutlinedIcon onClick={() => navigate("/addtocart")} sx={{ cursor: "pointer", fontSize: 30 }}/>
      </Badge>
    </IconButton>
        <IconButton gap={1} onClick={handleProfileMenuOpen}>
          <img src={img2} alt="Pet Heaven" width="40" height="40" style={{ borderRadius: "50%" }} />
        </IconButton>
        {/* Profile Dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
         <MenuItem onClick={() => {
  handleMenuClose();
  navigate("/profile");
}}>
  <Avatar src={img2} sx={{ mr: 1 }} /> My Profile
</MenuItem>
          {/* <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Need Help?</MenuItem> */}
          <MenuItem onClick={() => {
  handleMenuClose();
  handleLogout(); // 🔥 Calls signOut
}}>
  Sign Out
</MenuItem>

        </Menu>
      </Box>
    </div>
  </nav>

  {/* Add padding to the body or container to prevent content from being hidden under the navbar */}
  <style>{`
    body {
      padding-top: 120px; /* Adjust this value based on the combined height of both topbar and navbar */
    }
  `}</style>
</div>

  );
}

export default MainPage;
