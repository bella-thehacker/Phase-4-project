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


          <FlyoutLink href='/services' className='btn' FlyoutContent={PricingContent}>
            Services
          </FlyoutLink>


          <NavLink to='/book' className='btn'>

          <a href='/contact' className='btn'>
            CONTACT US
          </a>
          <a href='/book' className='btn'></a>

            BOOK NOW
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
      {/* <div className="flyout">
        <FlyoutLink
            href='/services'
            className='btn'
            FlyoutContent={PricingContent}>
            Services
          </FlyoutLink>
      </div> */}
    </>
  )
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false)

  const showFlyout = open && FlyoutContent

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative h-fit w-fit'>
      <a href={href} className='relative text-2xl text-white'>
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className='absolute -bottom-1 -left-2 -right-2 h-0.5 origin-left rounded-full bg-white transition-transform duration-300 ease-out'
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{
              translateX: '-50%',
            }}
            className='absolute left-1/2 top-12 bg-white text-black '>
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent'></div>
            <div className='absolute left-1/2 top-0.5 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white'></div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PricingContent = () => {
  return <div className='h-24 w-64  bg-white p-6 shadow-xl'></div>
}

export default Navbar
