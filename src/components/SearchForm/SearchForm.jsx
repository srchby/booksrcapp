import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css"

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("Death of Ivan Ilyich");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/booklist");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='Death of Ivan Ilyich' ref={searchText} />
              <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                <MdOutlineSearch className='text-cyan' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
