import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

  return (
    <nav className='navbar' id='navbar'>
      <div className='brand-and-toggler flex-nav flex-sb'>
        <span className='text-uppercase fw-6 fs-22'>
          BookSrcApp
        </span>
        <div>
          <ul className='flex-nav'>
            <li>
              <Link to="booklist" className='nav-link text-uppercase fs-22 fw-6 ls-1 margin-sides'>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className='nav-link text-uppercase fs-22 fw-6 ls-1 margin-sides'>
                About
              </Link>
            </li>
            <li>
              <Link to="https://github.com/srchby" className='nav-link text-uppercase fs-22 fw-6 ls-1 margin-sides' target="_blank" rel="noopener noreferrer">
                srchby
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
