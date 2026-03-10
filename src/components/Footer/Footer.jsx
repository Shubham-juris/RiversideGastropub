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

          {/* Social Icons Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <a href="https://www.facebook.com/Riversidegastropub1" target="_blank" rel="noreferrer" className="text-light mx-3 fs-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/riversidegastropub01/" target="_blank" rel="noreferrer" className="text-light mx-3 fs-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/RiversideG36521" target="_blank" rel="noreferrer" className="text-light mx-3 fs-4">
              <i className="fab fa-x-twitter"></i>
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
