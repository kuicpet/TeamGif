/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Navbar = () => (
  <Router>
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <Link to="/" className="navbar-brand">TeamGif</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id="btn">
            <span><i className="fa fa-bars" aria-hidden="true" id="toggle" /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li><Link to="/CreateUser" className="nav-link">Sign Up</Link></li>
              <li><Link to="/UserSignin" className="nav-link mx-5">Sign In</Link></li>
            </ul>
          </div>
        </nav>
      </div>

    </div>
  </Router>
);


export default Navbar;
