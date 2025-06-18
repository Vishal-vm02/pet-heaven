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
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 9999,
          fontSize: "14px",
        }}
      >
        <div className="container">
          <span className="d-block d-md-none fw-semibold">🐾 Give Love, Get Love</span>
          <div className="d-none d-md-flex justify-content-between">
            <div>
              <i className="bi bi-telephone text-primary"></i> 90231 27367
              <i className="bi bi-geo-alt text-primary ms-3"></i> Ratnakar Apartment, Ahmedabad-38005, India
            </div>
            <div>🐾 Give Love, Get Love</div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{
          position: "fixed",
          top: isMobile ? "40px" : "35px",
          width: "100%",
          zIndex: 9999,
        }}
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

          {/* Mobile View */}
          {isMobile ? (
            <>
              <Box display="flex" alignItems="center" marginLeft="auto" gap={1}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  aria-label="Toggle navigation"
                  style={{ padding: "6px 10px", border: "none" }}
                  onClick={() => setNavbarOpen((prev) => !prev)}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <IconButton color="inherit">
                  <Badge badgeContent={wishlist.length} color="primary" showZero>
                    <FavoriteBorderIcon
                      onClick={() => navigate("/wishlist")}
                      sx={{ cursor: "pointer" }}
                    />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={cart.length} color="success" showZero>
                    <ShoppingCartOutlinedIcon
                      onClick={() => navigate("/addtocart")}
                      sx={{ cursor: "pointer" }}
                    />
                  </Badge>
                </IconButton>
                <IconButton onClick={handleProfileMenuOpen}>
                  <Avatar src={img2} sx={{ width: 36, height: 36 }} />
                </IconButton>
              </Box>

              {/* Collapsible Menu Items */}
              {navbarOpen && (
                <div className="w-100 mt-2 bg-light shadow-sm rounded p-2">
                  <ul className="navbar-nav text-center">
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
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav mx-auto gap-3">
                  {menuItems.map((item) => (
                    <li className="nav-item" key={item.name}>
                      <a
                        className="nav-link fw-bold"
                        onClick={() => navigate(item.route)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle fw-bold"
                      data-bs-toggle="dropdown"
                      role="button"
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

                {/* Desktop Right Icons */}
                <Box display="flex" alignItems="center" gap={1}>
                  <IconButton color="inherit">
                    <Badge badgeContent={wishlist.length} color="primary" showZero>
                      <FavoriteBorderIcon
                        onClick={() => navigate("/wishlist")}
                        sx={{ cursor: "pointer", fontSize: 30 }}
                      />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <Badge badgeContent={cart.length} color="success" showZero>
                      <ShoppingCartOutlinedIcon
                        onClick={() => navigate("/addtocart")}
                        sx={{ cursor: "pointer", fontSize: 30 }}
                      />
                    </Badge>
                  </IconButton>
                  <IconButton onClick={handleProfileMenuOpen}>
                    <Avatar src={img2} />
                  </IconButton>
                </Box>
              </div>
            </>
          )}

          {/* Profile Menu */}
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

      {/* Padding below fixed nav */}
      <div style={{ paddingTop: isMobile ? "150px" : "120px" }}></div>
    </div>
  );
}

export default MainPage;