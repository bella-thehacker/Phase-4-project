import React from 'react'
import { NavLink } from 'react-router-dom'
import videohome from '../assets/videohome.mp4'
import '../css/HomePage.css'
import '../css/Navbar.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
function HomePage() {
  const [text] = useTypewriter({
    words: ['Delight in the wonderful '],
    loop: {},
    typeSpeed: 250,
    deleteSpeed: 40,
  })

  return (
    <>
      <div>
        <video src={videohome} autoPlay loop muted />
        <div className='video-content'>
          <div className='video-content-top'>
            <p>EN</p>
            <img src='/vistaa2.png' alt='' />
            <NavLink to='/book' className='book'>
              BOOK NOW
            </NavLink>
          </div>
          <div className='video-content-bottom'>
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
              <NavLink to='/membership' className='btn'>
              - MEMBERSHIP -
            </NavLink>
              <NavLink to='/contact' className='btn'>
                - CONTACT US -
              </NavLink>
            </div>
            <h1>
              <span className='type-writer-text'>{text}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className='h-screen w-full'></div>
      <div className='h-100 w-full bg-white my-0 flex justify-center items-center mt-96 z-10'>
        <p className='text-4xl text-black w-3/4 h-3/4 my-5 py-7 bg-white flex items-center font-serif font-semibold '>
          <img src='/public/vistaa2.png' alt='' className='h-70 w-60 mr-9' />
          <div className='w-3 h-3/4 bg-black'></div>A warm welcome to Vista
          Resort. A luxury five Star boutique resort in Nairobi. We pride
          ourselves on providing exceptional guest experiences and service,
          ensuring the utmost comfort and luxury.A leafy oasis where city luxury
          meets resort allure. Spread across eight acres, indulge in exceptional
          facilities, exquisite dining, serene gardens and impeccable service.
          Welcome to our Hotel in Nairobi.
        </p>
      </div>
      <div className='stay_homepage'>
        <h1>Rooms & Suites</h1>
        <p>
          Lofty, expansive rooms with vast, bright en-suite bathrooms and large
          private terraces are characteristic of the hotel’s wonderful sense of
          space and use of natural light. There are 45 high-ceilinged suites,
          two of which are penthouse style Presidential Suites and 43 Junior
          Suites culminating in vaulted beams. Muted colors and textured fabrics
          in ecru and taupe create an ambiance of contemporary-chic while subtle
          touches of brass, mahogany and leather bear reference to the classic
          elegance of vintage East African safaris Beyond the balustrade of your
          private balcony, we’ve chosen for you a view of The Green Hills of
          Africa.
        </p>
        <div className='w-15 px-5 rounded-xl mt-12 bg-zinc-700'>
          <NavLink to='/stay' className='view_more2'>
            View More
          </NavLink>
        </div>

        <div className='stay_imgs'>
          <div className='mx-1 flex flex-row justify-around h-1/2 '>
            <img
              src='https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='classic room'
              className='m-3 rounded-lg'
            />
            <img
              src='https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='classic room'
              className='m-3 rounded-lg'
            />
            <img
              src='https://www.hemingways-collection.com/wp-content/uploads/2020/07/Home-Stay-Blixen-Suite.jpg?format=auto&width=2000'
              alt='classic room'
              className='m-3 rounded-lg'
            />
          </div>
          <div className='mx-1 flex flex-row justify-around h-1/2 '>
            <img
              src='https://www.hemingways-collection.com/wp-content/uploads/2020/07/Blixen-living-and-dining.jpg?format=auto&width=2000'
              alt='classic room'
              className='m-3 rounded-lg'
            />
            <img
              src='https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600'
              alt='classic room'
              className='m-3 rounded-lg'
            />
            <img
              src='https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D'
              alt='classic room'
              className='m-3 rounded-lg'
            />
          </div>
          <div></div>
        </div>
      </div>
      <div className='dining_image'>
        <div className='dining_homepage'></div>
        <div className='dining_homepage_inner'>
          <h1>Dining</h1>
          <p>
            Enjoy an array of international dining experiences that will satisfy
            the most refined palettes in Nairobi.
          </p>
          <div className='w-15 px-5 rounded-xl mt-12 bg-zinc-700'>
            <NavLink to='/dining' className='view_more'>
              View More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
