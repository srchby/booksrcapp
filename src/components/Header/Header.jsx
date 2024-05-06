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
            <h3 className='header-title text-capitalize margin-h'>
                booksrcapp
            </h3>
            <p className='header-text fs-18 fw-3'>
            Simple React JS website that uses the OpenLibrary API, Project made by srchby.
            </p>   
            <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
