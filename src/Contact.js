import React, { useState } from 'react';
import img from './image/hii.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';

function Contact() {
  // State to track the hovered card index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Common hover style
  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  // Function to handle the hover effect on each card
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="container" style={{ padding: 10, display: "flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
        {/* <div style={{ display: "flex", justifyContent:"space-evenly", gap: "20px", flexWrap: "wrap" }}> */}
          
          {/* Address Card */}
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            style={{
              height: "180px",
              width: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 10,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ...(hoveredIndex === 0 && hoverStyle) // Apply hover styles to only this card
            }}
          >
            <LocationOnOutlinedIcon color="primary" sx={{ fontSize: 50, mt: 3 }} />
            <h5 style={{ fontWeight: "bold" }}>Address</h5>
            <p style={{ textAlign: "center" }}>6890 Blvd, The Bronx, NY 1058, USA</p>
          </div>

          {/* Phone Card */}
          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            style={{
              height: "180px",
              width: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 10,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ...(hoveredIndex === 1 && hoverStyle) // Apply hover styles to only this card
            }}
          >
            <PhoneInTalkOutlinedIcon color="primary" sx={{ fontSize: 50 }} />
            <h5 style={{ fontWeight: "bold" }}>Phone</h5>
            Mobile No
            <p>9023127367</p>

          </div>

          {/* Email Card */}
          <div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            style={{
              height: "180px",
              width: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 10,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ...(hoveredIndex === 2 && hoverStyle) // Apply hover styles to only this card
            }}
          >
            <EmailOutlinedIcon color="primary" sx={{ fontSize: 50 }} />
            <h5 style={{ fontWeight: "bold" }}>Email</h5>
            Email Id
            <p> vm0211@gmail.com</p>
          </div>

          {/* Working Hours Card */}
          <div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            style={{
              height: "180px",
              width: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 10,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ...(hoveredIndex === 3 && hoverStyle) // Apply hover styles to only this card
            }}
          >
            <QueryBuilderOutlinedIcon color="primary" sx={{ fontSize: 50 }} />
            <h5 style={{ fontWeight: "bold" }}>Working Hours</h5>
            <p>Monday - Sunday</p>
          </div>
        {/* </div> */}
      </div>

      {/* Contact Form Section */}
      <div className="container" style={{ marginTop: "10px", padding: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", flexWrap:"wrap", }}>
          
          {/* Left Column: Contact Form */}
          <div className="col-md-8" style={{ padding: 10 }}>
            <h6 style={{ color: "#2a96ff" }}>Get In Touch</h6>
            <h5>We want to provide you with a great experience</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="number" className="form-label">Phone No</label>
                <input type="number" className="form-control" id="number" />
              </div>
              <div className="col-md-6">
                <label htmlFor="text" className="form-label">Subject</label>
                <input type="text" className="form-control" id="text" />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" id="message" className="form-control" required></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-4" style={{ padding: 10, backgroundColor: "#87CEEB", borderRadius: 10 }}>
            <center>
              <img src={img} alt="Contact Us" style={{ height: "500px", width: "auto", objectFit: "cover" }} />
            </center>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
