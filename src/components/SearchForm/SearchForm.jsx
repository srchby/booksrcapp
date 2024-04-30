import React from 'react'
import "./SearchForm.css";
import { useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';

const SearchForm = () => {
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-container'>
          <form className='search-form'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' className='form-control' placeholder='The Death of Ivan Ilytch'/>
              <button type='submit' className='flex flex-c'>
                <MdOutlineSearch className='text-cyan' size={32}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
