import React from 'react'
import im from "./web.png"
import {
    Link
} from "react-router-dom";
export default function Header() {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
            <img src={im} alt="" height={"23vh"}/>
            <Link className="navbar-brand text-bold" to="/"> <h2>Web.Dev</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active py-2 "  to="/Learn">Learn</Link>
              </li>
              {/* aria-current="page" */}
              <li className="nav-item">
                <Link className="nav-link " to="/Measure">Measure</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active py-2" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active py-2" to="/Case">Case Studies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/About">About</Link>
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    
  );
}
