import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Spa() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    const imageContainers = document.querySelectorAll('.image-container')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    })

    imageContainers.forEach((container) => {
      observer.observe(container)
    })

    return () => {
      imageContainers.forEach((container) => {
        observer.unobserve(container)
      })
    }
  }, [])

  const slides = [
    { url: '/183.jpg', title: 'Spa' },
    { url: '/96.jpg', title: 'Spa' },
    { url: '/113-1.jpg', title: 'Spa' },
    { url: '/228.jpg', title: 'Spa' },
    { url: '/250.jpg', title: 'Spa' },
    { url: '/spa1.jpg', title: 'Spa' },
    { url: '/spa2.jpg', title: 'Spa' },
    { url: '/spa3.jpg', title: 'Spa' },
    { url: '/spa4.jpg', title: 'Spa' },
    { url: '/spa5.jpg', title: 'Spa' },
  ]

  const slideStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  }

  return (
   <div>
      <div className='spa-top'>
        <img src='/bg-spa-intro-2020.jpg' alt='' />

        <div className='spa-top-words' data-aos='zoom-in-up'>
          <h3>UNWIND AND INDULGE IN OUR </h3>
          <h1>SERENITY SPA</h1>
        </div>
      </div>

      <div className='mb-[100px] bg-[#f7f7f7] w-full h-[40vh] flex flex-col items-center'>
        <h2 className='font-bold mt-[30px] text-center text-[2rem] w-[40%]'>
          Immerse yourself in the tranquil world at Vista Spa, rediscover your
          senses and emerge relaxed, recharged and glowing.
        </h2>

        <div className=' text-left mt-[50px] text-[1.5rem] flex flex-row w-[70%]'>
          <p className=' mx-[45px]'>
            Housed in its own wing of the hotel overlooking the pool and
            manicured gardens, Vista Spa offers guests peace and relaxation. The
            Spa menu combines both French and custom designed treatments crafted
            from locally sourced ingredients and is the perfect place to
            rediscover your senses after a long flight or a dusty safari.
          </p>
          <p className=' mx-[45px]'>
            Our range of treatments include an aromatic, intensive and mineral
            rich body wrap formulated to detox and relax you, exfoliating
            rituals using coconut, cinnamon and coffee which leave your skin
            feeling revitalized and silky smooth and a selection of traditional
            massage techniques offering holistic therapy for the body, mind and
            spirit.
          </p>
        </div>
      </div>

      <div>
        <div className='mb-[100px] h-[40vh] w-[100%] flex flex-col items-center '>
          <h2 className='font-bold text-[2rem]'>
            Spa Packages for the body, mind and soul
          </h2>
          <div className='object-contain flex justify-center w-[40%] h-auto '>
            <img
              className='mt-[40px] w-[50%] rounded-[10px]'
              src='/bg-spa-bed-2020.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='bg-[#f7f7f7] w-[100%] flex flex-col items-center'>
        <div className=' flex justify-center w-[70%] h-[60vh]'>
          <div className=''>
            <img
              className='h-full rounded-[10px] w-auto m-[10px]'
              src='/pexels-photo-3101547.jpeg'
              alt=''
            />
          </div>
          <div className='text-[2rem] w-[40%] ml-[200px] text-center flex items-center font-serif font-bold'>
            <p>
              All our Facial and Body treatments begin with a hot towel foot
              cleanse and “Initial Touch Ritual” and we encourage you to spend
              half an hour in our relaxation areas post treatment with herbal
              tea and a fresh fruit platter.
            </p>
          </div>
        </div>
      </div>
      <div className='my-[200px] w-[100%] flex flex-col items-center'>
        <div className=' flex flex-row-reverse justify-center w-[70%] h-[60vh]'>
          <div className=''>
            <img
              className='h-full rounded-[10px] w-auto m-[10px]'
              src='/spa4.jpg'
              alt=''
            />
          </div>
          <div className='text-[2.5rem] w-[40%] px-[100px] ml-[20px] text-center flex items-center font-serif font-bold'>
            <h2>Take a Refreshing Dip at our Swimming pool</h2>
          </div>
        </div>
      </div>

      <div className='spa-slider'>
        <ImageSlider slides={slides} />
        <h2>Services Offered with Spa Packages</h2>
      </div>
    </div>
  )
}

export default Spa
