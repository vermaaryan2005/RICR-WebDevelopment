import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2 bg-amber-300 text-light">
        <h2>Glow More 💄</h2>

        <div className="d-flex gap-3">
          <Link to="/" className="text-decoration-none text-light">
            Home
          </Link>

          <Link to="/about" className="text-decoration-none text-light">
            About
          </Link>

          <Link to="/product" className="text-decoration-none text-light">
            Product
          </Link>

          <Link to="/contact" className="text-decoration-none text-light">
            Contact
          </Link>

          <Link to="/signup" className="text-decoration-none text-light">
            Signup
          </Link>
           <Link to="/login" className="text-decoration-none text-light">
           Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;



























































{/* <div className="d-flex gap-3">
                <Link to={"/"} className="text-decoration-none text-light">Home</Link> 
              </div> */}