import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
   
  <header className="navbar navbar-expand-lg py-3 ">
    <div className="container">
    <div className="col-md-3 mb-2 mb-md-0">
      <Link to="/">
        <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/logo.svg" alt="" />
      </Link>
    </div>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><NavLink to="/" className="px-4 navli">Home</NavLink></li>
      <li><NavLink to="/about" className="px-4 navli">About</NavLink></li>
      <li><NavLink to="/works" className="px-4 navli">Works</NavLink></li>
      <li><NavLink to="/contact" className="px-4 navli">Contact</NavLink></li>
    </ul>
    <div className="col-md-3 text-end">
      <Link to='/contact' className="btn navbtn me-2">Let s talk</Link>
    </div>
    </div>
  </header>

  )
}

export default Nav