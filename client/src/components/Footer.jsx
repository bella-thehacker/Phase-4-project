import React from 'react'
import '../css/footer.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <div className='main-footer'>
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
        <div className='dining-body' data-aos='fade-up'>
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
        <div className='follow-us'>
                <div className='icons-follow-us'>
                  <FontAwesomeIcon icon={faFacebook} size='fa-3x' />
                </div>
                <div className='icons-follow-us'>
                  <FontAwesomeIcon icon={faSquareInstagram} size='fa-3x' />
                </div>
                <div className='icons-follow-us'>
                  <FontAwesomeIcon icon={faXTwitter} size='fa-3x' />
                </div>
              </div>
      </div>
    </>
  )
}

export default Footer
