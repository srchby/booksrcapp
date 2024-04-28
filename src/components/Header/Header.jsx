import React from 'react'
import Navbar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text'>
            <h3 className='header-title text-capitalize'>
                Find books
            </h3>
            <p className='header-text fs-18 fw-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>   
            <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
