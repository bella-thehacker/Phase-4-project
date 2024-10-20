import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn } from './Variants'

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
          <NavLink to='/stay' className='btn'>
            STAY
          </NavLink>
          <NavLink to='/dining' className='btn'>
            DINING
          </NavLink>
          <NavLink to='/spa' className='btn'>
            SPA
          </NavLink>
          <NavLink to='/corporate' className='btn'>
            CORPORATE
          </NavLink>
          <NavLink to='/services' className='btn'>
            SERVICES
          </NavLink>
          <NavLink to='/contact' className='btn'>
            CONTACT US
          </NavLink>
        </div>
      </nav>
      <div className={menu_class}>
        <div className='menus'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='burger_image1'></motion.div>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='burger_image2'></motion.div>
          <motion.div
            variants={fadeIn('right', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='burger_image3'></motion.div>
          <motion.div
            variants={fadeIn('right', 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='burger_image4'></motion.div>
        </div>
      </div>
    </>
  )
}

export default Navbar
