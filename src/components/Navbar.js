import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './nav.css'


const Navbar = () => {
  return (
    <div> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <p className='para'>
    Data Science or Prouduct Management which career is right for you?
    </p>
   </nav>
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <Link className="navbar-brand mt-2 mt-lg-0" to= { "/Front" }>
          <img className='immg'
            src="https://www.insaid.co/wp-content/uploads/2021/05/insaid-text-logo-2x.png"
            height={75}
            alt="Newsletter"
            loading="lazy" pt-4/>
        </Link>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pr-5">
          <li className="navitem">
            <a className="nav-link" href="#">
              Dashboard
            </a>
          </li>
          <li className="navvitem">
            <a className="nav-link" href="#">
              Team
            </a>
          </li>
          <li className="navvitem">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="hh">
        {/* Icon */}
        
        {/* Notifications */}
        <Link to={'/Front'} className='btn btn-primary'>Login</Link>

        {/* Avatar */}
        
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </div>
  )
}

export default Navbar