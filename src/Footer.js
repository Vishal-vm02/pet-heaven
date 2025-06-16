import React from "react";
// import "boxicons/css/boxicons.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // You can place your custom CSS here
import img from "./image/pet1.png";
import rupay from './image/rupay.png'
import paytm from './image/ptm.png'
import visa from  './image/visa.jpg'
import {useNavigate} from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="footer-area pt-3" style={{backgroundColor:"#ebf7fa"}}>
      <div className="container">
        <div className="row">
          {/* Logo and Contact Info */}
          <div className="col-lg-3 col-sm-6 mb-2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={img}
                alt="Drodo"
                className="img-fluid"
                width="50"
                height="50"
              />
              <h2 style={{ marginLeft: "5px" }}>Pet Heaven</h2>
            </div>
            <ul
              className="list-unstyled text-muted"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <li style={{ marginBottom: "10px" }}>
                <strong>Phone:</strong>{" "}
                <a
                  href="#"
                  className="text-dark text-decoration-none hover-blue"
                >
                  9023127367
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:hello@drodo.com"
                  className="text-dark text-decoration-none hover-blue"
                >
                  vm02@gmail.com
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Address:</strong>{" "}
                <span className="text-dark">
                908 Clement St, San Francisco, California, 94118,
                United States
                </span>
              </li>
            </ul>

            <div className="d-flex gap-2 mt-3">
              <a href="#" className="text-dark fs-5 hover-blue">
                <i className="bx bxl-facebook-square"></i>
              </a>
              <a href="#" className="text-dark fs-5 hover-blue">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="text-dark fs-5 hover-blue">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="#" className="text-dark fs-5 hover-blue">
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a href="#" className="text-dark fs-5 hover-blue">
                <i className="bx bxl-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Information */}
          <div className="col-lg-2 col-sm-6 mb-2 offset-lg-1">
            <h5 className="fw-bold"  style={{ marginBottom: "10px"}}>Information</h5>
            <ul className="list-unstyled">
              <li style={{ marginBottom: "10px" }}>
              <a href="/aboutus"
              className="text-dark text-decoration-none hover-blue">About Us</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/contact"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/privacy"
                  className="text-dark text-decoration-none hover-blue"
                >
                 Privacy Policy
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/terms"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Terms & Conditions
                </a>
              </li>
              {/* <li style={{ marginBottom: "10px" }}>
                <a
                  href="customer-service.html"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Delivery Info
                </a>
              </li> */}
              {/* <li style={{ marginBottom: "10px" }}>
                <a
                  href="customer-service.html"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Orders & Returns
                </a>
              </li> */}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-lg-2 col-sm-6 mb-2">
            <h5 className="fw-bold" style={{ marginBottom: "10px" }}>Customer Care</h5>
            <ul className="list-unstyled">
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/help"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Help & FAQs
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/login"
                  className="text-dark text-decoration-none hover-blue"
                >
                 Login
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/Profile"
                  className="text-dark text-decoration-none hover-blue"
                >
                  My Account
                </a>
              </li >
              
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/wishlist"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Wishlist
                </a>
              </li>
              {/* <li style={{ marginBottom: "10px" }}>
                <a
                  href="contact.html"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Newsletter
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="purchase-guide.html"
                  className="text-dark text-decoration-none hover-blue"
                >
                  Purchasing Policy
                </a>
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-sm-6 mb-2">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="text-muted">
              
Sign up for our mailing list to get the latest updates.
            </p>
            <form className="d-flex flex-column gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-30 align-self-start"
              >
               Submit 
              </button>
            </form>
          </div>
        </div>
        </div>

        <hr />
<div className="container p-2"  >
        <div className=" container row mx-2" style={{display:"flex", justifyContent:"space-around"}}>
  <div className="col-md-6 text-muted">
    <p className="d-flex flex-row mb-0">
      <span className="cursive-text">&copy; 2025.{" "}</span>
      <a
        href="#"
        className="ms-1 text-decoration-none hover-blue cursive-text"
        aria-label="VM@Style link"
      >
        VM@Style..
      </a>
    </p>
    <p className="mb-0">Turning ideas into reality since day one.!</p>
  </div>

  <div className="col-md-6" >
    <div className="d-flex flex-wrap justify-content-md-end justify-content-start align-items-center gap-2">
      <span className="text-muted">We accept payment via:</span>
      <img src={visa} alt="Visa" height="30" />
      <img src={rupay} alt="RuPay" height="30" />
      <img src={paytm} alt="Paytm" height="30" />
      {/* 
      <img src="assets/img/payment-types/american-express.png" alt="American Express" height="30" />
      <img src="assets/img/payment-types/discover.png" alt="Discover" height="30" />
      */}
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
