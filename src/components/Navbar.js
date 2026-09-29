import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const res = await fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "",
		source: "auto",
		target: "en",
		format: "text",
		alternatives: 3,
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{ gap: '18px' }}>
          <img 
            src="/images/logo.png" 
            alt="Singhasth Kumbh Logo" 
            style={{ 
              height: '125px',       // Logo height
              width: '125px',        // Logo width
              borderRadius: '50%',   // Circle
              objectFit: 'cover'     // Maintain aspect ratio
            }}
          />
          <span style={{
            fontSize: '2rem',       
            fontWeight: '700',
            color: '#333',
            lineHeight: '1.1'
          }}>
             Ujjain Singhasth 2028
          </span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                to="/"
                end
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                to="/mahakaleshwar"
              >
                Mahakaleshwar
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/ujjain"
              >
                Ujjain
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/KumbhMela"
              >
                KumbhMela
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                to="/about"
              >
                About
              </NavLink>
            </li>
<li className="nav-item dropdown">
  <select
    className="form-select"
    style={{ width: '150px', marginLeft: '20px' }}
    onChange={(e) => alert(`You selected: ${e.target.value}`)} // फिलहाल सिर्फ alert देगा
  >
    <option value="en">English</option>
    <option value="hi">Hindi</option>
    <option value="mr">Marathi</option>
    <option value="gu">Gujarati</option>
  </select>
</li>


          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
