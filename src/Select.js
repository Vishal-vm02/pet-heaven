import React from 'react';
import img1 from './image/first.jpg';
import img2 from './image/dog1.jpg'

function Select() {
  return (
    <div 
      className="container" 
      style={{
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "70vh", 
        gap: 10
      }}
    >
      <div 
        className="col-md-6" 
        style={{
          height: "300px", 
          width: "600px", 
          border: "1px solid black", 
          backgroundImage: `url(${img1})`, // Correctly using the imported image
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
      >
       <h1>Bird's</h1>
      </div>
      <div 
        className="col-md-6" 
        style={{
          height: "300px", 
          width: "600px", 
          border: "1px solid black", 
          backgroundImage: `url(${img2})`, // Also correctly using the imported image here
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
      >
       {/* <div 
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" // Full viewport height for vertical centering
      }}
    > */}
      <h1 style={{  display: "flex", 
        flexDirection: "column", // Aligns items in a column
        justifyContent: "center", // Centers the text vertically
         }}>Animal</h1>
    {/* </div> */}

      </div>
    </div>
  );
}

export default Select;
