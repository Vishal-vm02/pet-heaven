import React from 'react'
import img from "./pet1.png";


function MainPage() {
  return (
   <div>
   <div className="d-none d-md-block" style={{ backgroundColor: '#f8f9fc', fontSize: '14px', padding: '5px 0' }}>
  <div className="d-flex justify-content-around align-items-center flex-wrap px-2">
    
    {/* Left: Contact Info */}
    <div className="d-flex align-items-center gap-2">
      <i className="bi bi-telephone text-primary"></i>
      <span>(+123) 456-7898</span>
      <i className="bi bi-geo-alt text-primary ms-3"></i>
      <span>6890 Blvd, The Bronx, NY 1058, USA</span>
    </div>

    {/* Right: Language, Currency, Account */}
    <div className="d-flex align-items-center gap-3">
      <span>
        <img src="https://flagcdn.com/us.svg" width="20" className="me-1" alt="flag" /> Eng
      </span>
      <span>USD</span>
      <span>|</span>
      <a href="#" className="text-decoration-none text-dark">My Account</a>
    </div>

  </div>
</div>

<style>{`
  .hover-link, .nav-link, .dropdown-item, .navbar-brand span, .bi {
    transition: color 0.2s ease;
  }

  .hover-link:hover,
  .nav-link:hover,
  .dropdown-item:hover,
  .navbar-brand:hover,
  .navbar-nav .nav-item .nav-link:hover,
  .navbar-nav .dropdown-menu a:hover,
  .navbar-brand span:hover,
  .bi:hover {
    color: #2a96ff !important;
  }
`}</style>

   </div>
  )
}

export default MainPage
