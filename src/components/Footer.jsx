import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="py-5 footer">
    <ul className="nav justify-content-center pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="px-3 footerlink">HOME</Link></li>
      <li className="nav-item"><Link to="/about" className="px-3 footerlink">ABOUT</Link></li>
      <li className="nav-item"><Link to="/works" className="px-3 footerlink">WORKS</Link></li>
      <li className="nav-item"><Link to="/contact" className="px-3 footerlink">CONTACT</Link></li>
    </ul>
    <p className="text-center footerp">© All rights reserved by <span className='footerspan'>WordPressRiver</span></p>
  </footer>

  )
}

export default Footer