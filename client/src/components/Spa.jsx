import React from 'react'
import ImageSlider from './ImageSlider';


function Spa() {
const slides = [
  {url:"/183.jpg", title: "Spa"},
  {url:"/96.jpg", title: "Spa"},
  {url:"/113-1.jpg", title: "Spa"},
  {url:"/228.jpg", title: "Spa"},
  {url:"/250.jpg", title: "Spa"},
  {url:"/74.jpg", title: "Spa"}
]

const slideStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
  
};

  return (
    <div>
      <div className='spa-top'>
        <img src="../public/bg-spa-intro-2020.jpg" alt="" />

        <div className='spa-top-words'>
          <h3>UNWIND AND INDULGE IN OUR </h3>
          <h1>SERENITY SPA</h1>
        </div>
      </div>

      <div className='spa-body'>
        <h2>Immerse yourself in the tranquil world at Vista Spa, rediscover your senses and emerge relaxed, recharged and glowing.</h2>

        <div className='spa-body-words'>
          <p>Housed in its own wing of the hotel overlooking the pool and manicured gardens, Vista Spa offers guests peace and relaxation. The Spa menu combines both French and custom designed treatments crafted from locally sourced ingredients and is the perfect place to rediscover your senses after a long flight or a dusty safari.</p>
          <p>Our range of treatments include an aromatic, intensive and mineral rich body wrap formulated  to detox and relax you, exfoliating rituals using coconut, cinnamon and coffee which leave your skin feeling revitalized and silky smooth and a selection of traditional massage techniques offering holistic therapy for the body, mind and spirit.</p>

        </div>
      </div>

      <div id='spa-packages'>
        <div id='spa-packages-1'>
          <h2>Spa Packages for the body, mind and soul</h2>
          <img src="../public/bg-spa-bed-2020.jpg" alt="" />
        </div>
      

      
        <div id='spa-packages-2'>
        <img src="../public/pexels-photo-3101547.jpeg" alt="" />
          <p>All our Facial and Body treatments begin with a hot towel foot cleanse and “Initial Touch Ritual” and we encourage you to spend half an hour in our relaxation areas post treatment with herbal tea and a fresh fruit platter.</p>
          
        </div>
      </div>

      <div className='spa-slider'>
        <ImageSlider slides={slides} />
      </div>



      
    </div>
  )
}

export default Spa