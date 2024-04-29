import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id='navbar'>
      <div className='brand-and-toggler flex flex-sb'>
        <span className='text-uppercase fw-7 fs-27'>
          BookSrcApp
        </span>
        <button type='button' onClick={handleNavbar} className='navbar-toggle-btn'>
          <HiOutlineMenuAlt3 size={35} style={{
            color: `${toggleMenu ? "#fff" : "#010101"}`
          }} />
        </button>
      </div>

      <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
        <ul>
          <li>
            <Link to="booklist" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
