import React from 'react'
import {Link} from "react-router-dom" 

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-lights ">
        <div className="container-fluid">
          <Link className="logo"  to="/">
            <img src="foodlogo.jpg" alt="Food Logo" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
              <Link className="nav-link linkcol" aria-current="page" to="/">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link linkcol" to="/breakfast">
                BreakFast
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link linkcol" to="/lunch">
                Lunch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link linkcol" to="/dinner">
                Dinner
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              
              className="form-control me-2 search"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}
