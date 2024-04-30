import React from 'react'
import Loaderimg from '../../images/08957d0ec9098630a9d667daf415517c.jpg_750x750.png.png';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img alt='Loader' src={Loaderimg}/>
    </div>
  )
}

export default Loader
