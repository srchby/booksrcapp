import React from 'react'
import { useGlobalContext } from "../../context."
import Book from "./Book.jsx"
import Loading from "../Loader/Loader"
import coverimg from "../../images/08957d0ec9098630a9d667daf415517c.jpg_750x750.png.png"
import "../BookList/Booklist.css"

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const bookCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverimg
    }
  })

  console.log(bookCovers);

  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          Booklist
        </div>
        <div className='booklist-content grid'>
          { 
          bookCovers.slice(0, 30).map((item, index) => {
            return (
              <Book key = {index} {... item}/>
            )
          })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList
