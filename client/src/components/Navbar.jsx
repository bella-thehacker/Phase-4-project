import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import '../css/Navbar.css'


function Navbar() {
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  function changeMenu() {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    } else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <nav>
        <div className='navigation_bar'>
          <div className='logo'>
            <NavLink to='/'>
              <img src='/vistaa2.png' alt='' />
            </NavLink>
          </div>
          <div className='line'></div>
          <div className='burger_menu' onClick={changeMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
        <div className='navbar_buttons'>
          <NavLink to='/stay'>STAY</NavLink>
          <NavLink to='/dining'>DINING</NavLink>
          <NavLink to='/spa'>SPA</NavLink>
          <NavLink to='/corporate'>CORPORATE</NavLink>
          <NavLink to='/services'>SERVICES</NavLink>
          <NavLink to='/contact'>CONTACT US</NavLink>
          <NavLink to='/book' className='book'>
            BOOK NOW
          </NavLink>
        </div>
      </nav>
      <div className={menu_class}>
        <div className='menus'>
          <div className='burger_image1'></div>
          <div className='burger_image2'></div>
          <div className='burger_image3'></div>
          <div className='burger_image4'></div>
        </div>
      </div>
    </>
  )
}

export default Navbar
