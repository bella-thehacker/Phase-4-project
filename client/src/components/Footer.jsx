import React from 'react'
import '../css/footer.css'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import {} from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className='main-footer'>
        <div className='footer-top'>
          <div className='navbar_buttons'>
            <NavLink to='/stay' className='btn'>
              - STAY -
            </NavLink>
            <NavLink to='/dining' className='btn'>
              - DINING -
            </NavLink>
            <NavLink to='/spa' className='btn'>
              - SPA -
            </NavLink>
            <NavLink to='/corporate' className='btn'>
              - CORPORATE -
            </NavLink>
            <NavLink to='/services' className='btn'>
              - SERVICES -
            </NavLink>
            <NavLink to='/contact' className='btn'>
              - CONTACT US -
            </NavLink>
          </div>
        </div>
        <div className='footer-middle'>
          <div>
            <p><strong>Head Office:</strong> Times Towers, P.O. Box 123-45678, Nairobi</p>
            <p>Tel: + 254 (0) 712 345 678</p>
          </div>
          <div className='footer-imgs'>
            <div
              className='bg-white w-full h-full  flex justify-around align-middle'
              data-aos='fade-up'>
              <img
                src='https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17210489325494_glow.png'
                onClick={() => scrollToSection(glowRef)}
              />
              <img
                src='https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685598893_horizon.png'
                onClick={() => scrollToSection(horizonRef)}
              />
              <img
                src='https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144671207319_thehide.png'
                onClick={() => scrollToSection(hideRef)}
              />
              <img
                src='https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685605336_ruby.png'
                onClick={() => scrollToSection(rubyRef)}
              />
              <img
                src='https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685590755_cascade.png'
                onClick={() => scrollToSection(cascadeRef)}
              />
              <img
                src='https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685602062_peacock.png'
                onClick={() => scrollToSection(peacockRef)}
              />
            </div>
          </div>
        </div>
        <div className='footer-btm'>
          <img src="/vistaa2.png" alt="" />
          <div className='follow-us'>
            <div className='icons-follow-us'>
              <FaLinkedin size={50} color='rgb(129, 112, 79)' />
            </div>
            <div className='icons-follow-us'>
              <FaInstagramSquare size={50} color='rgb(129, 112, 79)' />
            </div>
            <div className='icons-follow-us'>
              <FaFacebook size={50} color='rgb(129, 112, 79)' />
            </div>
            <div className='icons-follow-us'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
