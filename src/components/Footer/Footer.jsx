import React, { useEffect, useState } from "react";

function Footer() {
 
  return (
    <footer class="bg-dark text-white text-center py-4 mt-5">
      <div class="container">
        <p class="mb-2 mb-md-0">
          &copy; <span id="year"></span> Riverside Gastropub. All rights reserved.
        </p>
        <div class="mt-2">
          <a href="#" class="text-light text-decoration-none mx-2">
            Privacy Policy
          </a>
          <a href="#" class="text-light text-decoration-none mx-2">
            Terms of Service
          </a>
          <a href="#" class="text-light text-decoration-none mx-2">
            Contact
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
