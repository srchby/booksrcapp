import React from 'react'
import { useGlobalContext } from "../../context."
import Loading from "../Loader/Loader"
import coverimg from "../../images/08957d0ec9098630a9d667daf415517c.jpg_750x750.png.png"

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle } = useGlobalContext();

  return (
    <div>
      Booklist
    </div>
  )
}

export default BookList
