import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-5-strong "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="navbar-brand" >
            Vishal
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#skill">
                  NFT
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#project">
                  Earn
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#contacts">
                  Buy
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#contacts">
                  Referrals
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#contacts">
                  Ecosysytem
                </a>
              </li>
              <li className="nav-item mx-10">
                <a className="nav-link active" aria-current="page" href="#contacts">
                  About
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link active" aria-current="page" href="#contacts">
                <div className="buttons">
           <button type="button" className="btn btn-success">Trade</button>
          <button type="button" className="btn btn-dark">Connect Wallet</button>
           </div>
                </a>
              </li>
            </ul>
          </div>
          
          
        </div>
        

      </nav>
    </div>
  );
}