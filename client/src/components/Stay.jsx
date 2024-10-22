import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import '../css/Stay.css'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { MdOutlinePriceCheck } from 'react-icons/md'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { FaShippingFast } from 'react-icons/fa'

function Stay() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once: true,
    })
  

  const revealLetters = () => {
    const letters = document.querySelectorAll('.random-letter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('visible');
      }, Math.random() * 1000); // Random delay for each letter
    });
  };

  revealLetters();
  }, []);

  // Function to wrap each letter in a span
  const wrapWithSpans = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="random-letter">{char}</span>
    ));
  };


  return (
    <div>
      <div className='stay-top' data-aos="fade-up">
        <img src='../public/vistaa2.png' alt='vista logo' />
        <div className='stay-top-inn'>
         
          <h1>
            <i>
              {wrapWithSpans("Rooms and Suites")} {/* Each letter will be wrapped with a span */}
            </i>
          </h1>
          <h3>
            <i>
              Lofty, expansive rooms with vast, bright en-suite bathrooms and
              large private terraces are characteristic of the hotel’s wonderful
              sense of space and use of natural light. Muted colors and textured fabrics in ecru and taupe create
              an ambiance of contemporary-chic while subtle touches of brass,
              mahogany and leather bear reference to the classic elegance of
              vintage East African safaris Beyond the balustrade of your private
              balcony, we’ve chosen for you a view of The Green Hills of Africa.
            </i>
          </h3>
        </div>
      </div>

      <div className='classic-room' data-aos="fade-up">
        <img
          src='https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='classic room'
        />

        <div id='classic-words' data-aos="fade-left">
          <h3>
            <strong>Classic Room </strong>
          </h3>
          <div>
            <p>Size: 30 m²</p>
            <p>Max. 2 People</p>
          </div>
          <p>
            Our Classic Room offers a serene retreat with elegant decor, modern
            amenities, and a cozy atmosphere. Perfect for guests seeking refined
            simplicity and luxury.
          </p>
          <button>Book Online</button>
        </div>
      </div>

      <div className='classic-room' data-aos="fade-up">
        <img
          src='https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='classic room'
        />

        <div id='classic-words' data-aos="fade-left">
          <h3>
            <strong>Premier Room </strong>
          </h3>
          <div>
            <p>Size: 35 m²</p>
            <p>Max. 3 People</p>
          </div>
          <p>
            The Premier Room features stylish design with upscale furnishings,
            offering additional space and luxury. With stunning views and
            top-tier amenities, it’s an excellent choice for those looking for
            added comfort and elegance.
          </p>
          <button>Book Online</button>
        </div>
      </div>

      <div className='classic-room' data-aos="fade-up">
        <img
          src='https://www.hemingways-collection.com/wp-content/uploads/2020/07/Home-Stay-Blixen-Suite.jpg?format=auto&width=2000'
          alt='classic room'
        />

        <div id='classic-words' data-aos="fade-left">
          <h3>
            <strong>Grand Deluxe Room </strong>
          </h3>
          <div>
            <p>Size: 45 m²</p>
            <p>Max. 3 People</p>
          </div>
          <p>
            Our Grand Deluxe Room is the epitome of luxury, boasting spacious
            interiors, plush bedding, and marble bathrooms. Enjoy a lavish stay
            with refined furnishings, perfect for guests looking to indulge.
          </p>
          <button>Book Online</button>
        </div>
      </div>

      <div className='classic-room' data-aos="fade-up">
        <img
          src='https://www.hemingways-collection.com/wp-content/uploads/2020/07/Blixen-living-and-dining.jpg?format=auto&width=2000'
          alt='classic room'
        />
        <div id='classic-words' data-aos="fade-left">
          <h3>
            <strong>Panoramic Suite </strong>
          </h3>
          <div>
            <p>Size: 60 m²</p>
            <p>Max. 3 People</p>
          </div>
          <p>
            The Panoramic Suite offers floor-to-ceiling windows with stunning
            vistas, paired with a luxurious living space. Designed for those who
            appreciate both style and spectacular scenery, this suite is the
            ultimate retreat.
          </p>
          <button>Book Online</button>
        </div>
      </div>

      <div className='classic-room' data-aos="fade-up">
        <img
          src='https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600'
          alt='classic room'
        />

        <div id='classic-words' data-aos="fade-left">
          <h3>
            <strong>Skyline Suite </strong>
          </h3>
          <div>
            <p>Size: 65 m²</p>
            <p>Max. 3 People</p>
          </div>
          <p>
            Overlooking the vibrant cityscape, the Skyline Suite offers luxury
            and privacy. With its spacious layout, elegant living area, and
            striking skyline views, this suite delivers an unforgettable
            experience for discerning travelers.
          </p>
          <button>Book Online</button>
        </div>
      </div>

      <div className='classic-room' data-aos="fade-up">
        <img
          src='https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D'
          alt='classic room'
        />

        <div id='classic-words' data-aos="fade-left">
          <h3>
            <strong>Imperial Suite </strong>
          </h3>
          <div>
            <p>Size: 100 m²</p>
            <p>Max. 3 People</p>
          </div>
          <p>
            The Imperial Suite redefines opulence with its grand design,
            featuring a private dining area, spacious living quarters, and
            exquisite furnishings. Perfect for dignitaries and luxury-seekers,
            this suite provides every amenity for a regal experience.
          </p>
          <button>Book Online</button>
        </div>
      </div>

      <div className='classic-room' data-aos="fade-up">
        <img
          src='https://plus.unsplash.com/premium_photo-1664392414065-dc9a25c65e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJlc2lkZW50aWFsJTIwc3VpdGV8ZW58MHx8MHx8fDA%3D'
          alt='classic room'
        />

        <div id='classic-words' data-aos="fade-left">
          <h3>
            <strong>Presidential Suite </strong>
          </h3>
          <div>
            <p>Size: 150 m²</p>
            <p>Max. 3 People</p>
          </div>
          <p>
            Our Presidential Suite is the crown jewel of the hotel, offering
            unmatched luxury and sophistication. With expansive living spaces,
            private dining, and stunning views, this suite is designed for
            guests who demand the very best.
          </p>
          <button>Book Online</button>
        </div>
      </div>

      <div className='stay-bottom' data-aos="fade-up">
        <div className='bottom-words'>
          <h2> Your ideal Getaway is just a click away!</h2>
          <p>
            whether you are planning your trip, event or just a solo escape,
            discover our enticing offers today and embark on a journey to
            unforgettable experiences.
          </p>
        </div>

        <div id='bottom-icons'>
          <div id='icon-part'>
            <RiSecurePaymentFill size={50} />
            <p>We guarantee the security of each transaction</p>
          </div>

          <div id='icon-part'>
            <MdOutlinePriceCheck size={50} />
            <p>Special offers and packages available only on our website</p>
          </div>

          <div id='icon-part'>
            <FaShippingFast size={50} />
            <p>Receive instant booking confirmation</p>
          </div>

          <div id='icon-part'>
            <RiCustomerServiceFill size={50} />
            <p>24/7 Assistance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stay
