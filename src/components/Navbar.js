import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Sigaram's Shopping Website
          </Link>

          <div className="d-flex">
            <div className="m-2">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </div>

            <div className="m-2">
              <Link className="nav-link" to="/">
                My Account
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
