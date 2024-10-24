import '../css/corporate.css' // Make sure to create this CSS file
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Corporate() {
  const [text] = useTypewriter({
    words: ['Corporate Facilites '],
    loop: {},
    typeSpeed: 250,
    deleteSpeed: 40,
  })
  return (
    <div className='corporate-container'>
      <header>
        <div className='corporate-header'>
          <h1 className=''>
            <span className='type-writer-text'>{text}</span>
          </h1>
        </div>
      </header>
      <div className='text'>
        <p className='flex justify-center items-center'>
          Enjoy professionally organised and efficiently planned events and
          meetings in luxury conference suites and meeting rooms.
        </p>
      </div>

      <section className='corporate-description'>
        <p>
          Removed from the hustle and bustle of the city yet within easy reach
          of the hub of Nairobi’s Central Business District, our corporate
          facilities offer the coveted combination of privacy and proximity to
          the city. Equipped with the latest communication and presentation
          technology, our conference facilities and meeting rooms are a stylish
          venue for board meetings, strategy sessions and away-days. The total
          seclusion
        </p>
        <p>
          of our conference suite is an inspiring arena for business networking
          or in-house discussions whilst the highest level of functionality for
          instant global communication and the support of our efficient
          concierge will facilitate your work away from the office. Global
          corporate travellers will find the hotel’s high-tech amenities make
          this a productive and professional place from which to conduct
          business.
        </p>
      </section>
      <div className='image-corporate'>
        <div className='w-full h-32 bg-white'></div>
        <div>
          <div className='corporate-inn'>
            <p>SOPHISTICATED, IMPRESSIVE & EFFICIENT</p>
            <h1>
              <span className='type-writer-text2'>Corporate Facilites</span>
            </h1>
          </div>
        </div>
      </div>

      <section className='corporate-facilities'>
        <div className='w-full flex flex-col items-center justify-center my-[150px]'>
          <div className='rooms'>
            <div className='room'>
              <div className='room-inn'>
                <h3>Greenhills</h3>
                <p>172 square meters, 70 delegates (max)</p>
                <button>View floorplan</button>
              </div>
            </div>
            <div className='room'>
              <div className='room-inn'>
                <h3>Havana</h3>
                <p>136 square meters, 60 delegates (max)</p>
                <button>View floorplan</button>
              </div>
            </div>
            <div className='room'>
              <div className='room-inn'>
                <h3>Board Room</h3>
                <p>48 square meters, 15 delegates (max)</p>
                <button>Make an enquiry</button>
              </div>
            </div>
          </div>
          <div className='rooms'>
            <div className='room'>
              <div className='room-inn'>
                <h3>Bimini</h3>
                <p>24 square meters, 8 delegates (max)</p>
                <button>Make an enquiry</button>
              </div>
            </div>
            <div className='room'>
              <div className='room-inn'>
                <h3>Pilar</h3>
                <p>20 square meters, 6 delegates (max)</p>
                <button>Make an enquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='conference-packages'>
        <h2 className='text-[50px] pt-[80px] font-serif font-semibold'>
          Conference Packages
        </h2>

        <h3 className='text-[2.1rem] pb-[50px] font-serif font-semibold'>
          Standard Meeting Package
        </h3>
        <div className='w-[50%] flex flex-row justify-around'>
          <div className='package'>
            <h4>Half Day Package</h4>
            <div>
              KES 6,200 per person inclusive of taxes:
              <br />
              - Welcome break: Tea, coffee, assorted pastries, fruit juice, and
              a healthy option.
              <br />
              <br />
              - Mid-Morning/Afternoon Break: Tea, coffee, hot snacks, assorted
              sandwiches, and fruit slices.
              <br />
              <br />- Lunch: 3 course set / Buffet menu and a soft drink in the
              Brasserie.
            </div>
          </div>
          <div className='package'>
            <h4>Full Day Package</h4>
            <p></p>
            <div>
              KES 6,800 per person inclusive of taxes
              <br />
              - Welcome break: Tea, coffee, assorted pastries, fruit juice, and
              a healthy option.
              <br />
              <br />
              - Mid-Morning Break: Tea, coffee, hot snacks, assorted sandwiches,
              and fruit slices.
              <br />
              <br />
              - Lunch: 3 course set / Buffet menu and a soft drink in the
              Brasserie.
              <br />
              <br />
              - Afternoon Break:Tea, coffee with cookies and tea cakes. ½ litre
              water morning and afternoon.
              <br />
              <br />- Meeting provisions: Stationery, LCD projector, and Wi-Fi.
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <div className='contact-info'>
          <h2>Contact Us</h2>
          <p>
            To contact the corporate sales team, please call +254 (0) 787 654
            321
          </p>
          <p>
            Email: <a href='mailto:sales@vista.co'>sales@vista.co</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Corporate
