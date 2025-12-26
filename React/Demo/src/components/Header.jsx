import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
        <div className="d-flex justify-content-between align-items-center p-2 bg-primary text-light">
              <h1>My Website</h1> 
              <div className="d-flex gap-3">
                <Link to={"/"} className="text-decoration-none text-light">Home</Link>    
                <Link to={"/About"} className="text-decoration-none text-light">About</Link> 
                <Link to={"/Product"} className="text-decoration-none text-light">Product</Link>     
                <Link to={"/Contact"} className="text-decoration-none text-light">Contact</Link>

              </div>
        </div>
        </>
    );
}
export default Header;