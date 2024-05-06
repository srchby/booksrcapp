import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

  return (
    <div>
      <div className='section-title text-uppercase fs-26 fw-6 ls-1'>
        About
      </div>
      <br/>
      <div>
        <div className='text-uppercase fs-22 fw-4 ls-1'>
        Book Search App
        </div>
        Book Search App with Open Library API
        <div className='text-uppercase fs-22 fw-4 ls-1'>
          <br/>
        Tutorial
        </div>
        Project followed by this tutorial <br/>
        <Link to={'https://youtu.be/7xL9c39DhjI?si=1Ggwr9Qv-KRK14XL'}>
        https://youtu.be/7xL9c39DhjI?si=1Ggwr9Qv-KRK14XL
        </Link>
        <div className='text-uppercase fs-22 fw-4 ls-1'>
          <br/>
        API
        </div>
        Where to find the API <br/>
        <Link to={'https://openlibrary.org/dev/docs/api/search'}>
        https://openlibrary.org/dev/docs/api/search
        </Link>
      </div>
    </div>
  )
}

export default About
