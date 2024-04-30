import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

  return (
    <nav className='navbar' id='navbar'>
      <div className='brand-and-toggler flex flex-sb'>
        <span className='text-uppercase fw-7 fs-27'>
          BookSrcApp
        </span>
      </div>

      <div>
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
