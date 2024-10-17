import React from 'react'
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
            <a href='/'>
              <img src='/vistaa2.png' alt='' />
            </a>
          </div>
          <div className='line'></div>
          <div className='burger_menu' onClick={changeMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
        <div className='navbar_buttons'>
          <a href='/stay'>STAY</a>
          <a href='/dinig'>DINING</a>
          <a href='/services'>SERVICES</a>
          <a href='/contact'>CONTACT US</a>
          <a href='/book' className='book'>
            BOOK NOW
          </a>
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
