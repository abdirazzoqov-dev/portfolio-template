import React from 'react'

// custom style
import './header.css'

// react icons
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className='flex justify-between items-center mb-12 mb-2 lg:mt-[5rem]'>
        <header>
          <h2 className='ds-logo'>Dilshod Abdirazzoqov | Full stack Dasturchi</h2>
        </header>
        <span>
          <FaBarsStaggered className='text-2xl' />
        </span>
      </div>
    </>
  )
}

export default Header