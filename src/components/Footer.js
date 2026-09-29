// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo / Site Name */}
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold">📿 Singhsth Portal</h4>
            <p>Discover the divine journey of Ujjain Kumbh Mela and Mahakal Temples.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/kumbhmela" className="text-light text-decoration-none">Kumbh Mela</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><Link to="/ujjain" className="text-light text-decoration-none">Ujjain</Link></li>
            </ul>
          </div>

          {/* Address or Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact Info</h5>
            <p>📍 Near Mahakaleshwar Temple, Ujjain, India</p>
            <p>📧 singhasth.portal@gmail.com</p>
            <p>📞 ‪+91 98765 43210‬</p>
          </div>
        </div>

        <hr className="border-top border-light" />

        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Singhsth Portal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;