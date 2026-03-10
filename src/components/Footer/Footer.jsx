// import React, { useEffect, useState } from "react";

// function Footer() {
 
//   return (
//     <footer class="bg-dark text-white text-center py-4 mt-5">
//       <div class="container">
//         <p class="mb-2 mb-md-0">
//           &copy; <span id="year"></span> Riverside Gastropub. All rights reserved.
//         </p>
//         <div class="mt-2">
//           <a href="#" class="text-light text-decoration-none mx-2">
//             Privacy Policy
//           </a>
//           <a href="#" class="text-light text-decoration-none mx-2">
//             Terms of Service
//           </a>
//           <a href="#" class="text-light text-decoration-none mx-2">
//             Contact
//           </a>
         
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Common styles for the SVG icons
  const iconStyle = {
    fill: "currentColor", // This makes the SVG inherit the text-light color
    width: "24px",
    height: "24px",
    verticalAlign: "middle"
  };

  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Copyright Section */}
          <div className="col-md-4 text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {currentYear} Riverside Gastropub. All rights reserved.
            </p>
          </div>

          {/* Social Icons Section (Using SVGs) */}
          <div className="col-md-4 mb-3 mb-md-0">
            {/* Facebook */}
            <a href="https://www.facebook.com/Riversidegastropub1" target="_blank" rel="noreferrer" className="text-light mx-3">
              <svg xmlns="http://www.w3.org/2000/Generic" viewBox="0 0 24 24" style={iconStyle}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/riversidegastropub01/" target="_blank" rel="noreferrer" className="text-light mx-3">
              <svg xmlns="http://www.w3.org/2000/Generic" viewBox="0 0 24 24" style={iconStyle}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/RiversideG36521" target="_blank" rel="noreferrer" className="text-light mx-3">
              <svg xmlns="http://www.w3.org/2000/Generic" viewBox="0 0 24 24" style={iconStyle}>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>

          {/* Links Section */}
          <div className="col-md-4 text-md-end">
            <a href="#" className="text-light text-decoration-none mx-2 small">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none mx-2 small">Terms</a>
            <a href="#" className="text-light text-decoration-none mx-2 small">Contact</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
