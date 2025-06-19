// ✅ Final Responsive Navbar with Explore Dropdown Fixed & Centered Menu

import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./image/pet1.png";
import img2 from "./image/man.png";
import {
  Menu,
  MenuItem,
  Avatar,
  Box,
  Badge,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function MainPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/aboutus" },
    { name: "Pet Categories", route: "/categories" },
    { name: "My Pet", route: "/mypet" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      {/* Topbar */}
      <div
        className="bg-light text-center py-2"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 9999, fontSize: "14px" }}
      >
        <span className="fw-semibold">🐾 Give Love, Get Love</span>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{ position: "fixed", top: "35px", width: "100%", zIndex: 9999 }}
      >
        <div className="container-fluid" style={{ maxWidth: "1200px" }}>
          {/* Logo */}
          <a
            className="navbar-brand d-flex align-items-center"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src={img} alt="Logo" width="40" height="40" />
            <span className="ms-2 fw-bold fs-4">Pet Heaven</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`} id="mainNavbar">
            <ul
              className={`navbar-nav ${isMobile ? "flex-column text-center w-100 mt-2" : "mx-auto gap-3"}`}
              style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center" }}
            >
              {menuItems.map((item) => (
                <li className="nav-item" key={item.name}>
                  <a
                    className="nav-link fw-bold"
                    onClick={() => {
                      navigate(item.route);
                      setNavbarOpen(false);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  Explore
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/adopt")}>Adopt</a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/buypet")}>Buy a Pet</a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/petshift")}>Buy Pet From Owner</a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/sellpet")}>Sell a Pet</a>
                  </li>
                </ul>
              </li>
            </ul>

            <Box display="flex" alignItems="center" gap={1} className="ms-auto">
              <IconButton color="inherit">
                <Badge badgeContent={wishlist.length} color="primary" showZero>
                  <FavoriteBorderIcon onClick={() => navigate("/wishlist")} sx={{ cursor: "pointer", fontSize: 30 }} />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={cart.length} color="success" showZero>
                  <ShoppingCartOutlinedIcon onClick={() => navigate("/addtocart")} sx={{ cursor: "pointer", fontSize: 30 }} />
                </Badge>
              </IconButton>
              <IconButton onClick={handleProfileMenuOpen}>
                <Avatar src={img2} />
              </IconButton>
            </Box>
          </div>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                navigate("/profile");
              }}
            >
              <Avatar src={img2} sx={{ mr: 1 }} /> My Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                handleLogout();
              }}
            >
              Sign Out
            </MenuItem>
          </Menu>
        </div>
      </nav>

      <div style={{ paddingTop: isMobile ? "120px" : "120px" }}></div>
    </div>
  );
}

export default MainPage;