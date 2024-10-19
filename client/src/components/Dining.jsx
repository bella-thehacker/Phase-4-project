import React, { useRef } from "react";
import { MdRestaurantMenu } from "react-icons/md";

function Dining() {

  const glowRef = useRef(null)
  const horizonRef = useRef(null)
  const hideRef = useRef(null)
  const rubyRef = useRef(null)
  const cascadeRef = useRef(null)
  const peacockRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div className="dining-top">
        <img
          src="https://www.hemingways-collection.com/wp-content/uploads/2023/08/046_HemingwaysJune23-scaled.jpg?format=auto&width=1000"
          alt="dining"
        />
        <div className="dining-top-text">
          <h1>Savour Dishes for every Appetite</h1>
          <h3>At Vista Hotels</h3>
        </div>
      </div>

      <div className="dining-body">
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17210489325494_glow.png" onClick={() =>scrollToSection(glowRef)} />
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685598893_horizon.png" onClick={() =>scrollToSection(horizonRef)} />
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144671207319_thehide.png"  onClick={() =>scrollToSection(hideRef)} />
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685605336_ruby.png"   onClick={() =>scrollToSection(rubyRef)} />
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685590755_cascade.png"  onClick={() =>scrollToSection(cascadeRef)} />
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17144685602062_peacock.png"  onClick={() =>scrollToSection(peacockRef)} />
      </div>

      <div ref={glowRef} id="glow-hotel">
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/1200x900/17080704143461_gleehotelglowrestaurantbuffet.jpg" />
        <div id="glow-hotel-words">
          <h2>Glow Restaurant</h2>
          <p>
            A bright modern Parisian style all-day dining restaurant serving
            international cuisine with live cooking, sumptuous buffets and a
            delectable a la carte selection.
          </p>
          <div className="glow-hours">
            <h3>Hours of Operation</h3>
            <p>Breakfast: 6:30am - 10:30am</p>
            <p>Lunch: 11:00am - 3:00pm</p>
            <p>Dinner: 4:00pm - 10:00pm</p>
            
          </div>
          <div id="glow-hotel-menu">
          <a href="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17222292379018_Glow.pdf"> View menu <MdRestaurantMenu size={40}/> </a>
          </div>
        </div>
        
      </div>

      <div  ref={horizonRef} id="horizon-hotel">
        <div id="horizon-hotel-words">
          <h2>Horizon Rooftop Bar</h2>
          <p>
            The rooftop bar and terrace on the 7th floor is a relaxed and hip
            urban bar with panoramic views of the Nairobi skyline. With floor to
            ceiling viewing screens, stylish mixology from the long bar, tapas
            and dishes to share, both indoors and out on the terrace, it is a
            venue is designed for good times and great vibes
          </p>

          <div className="horizon-hours">
            <h3>Hours of Operation</h3>
            <p>Breakfast: 6:30am - 10:30am</p>
            <p>Lunch: 11:00am - 3:00pm</p>
            <p>Dinner: 4:00pm - 10:00pm</p>
          </div>

          <div  id="horizon-hotel-menu">
          <a href="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17222292380481_Horizon.pdf"> View menu <MdRestaurantMenu size={40}/> </a>
          </div>
        </div>
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/1200x900/17047916558436_gleehotelrooftopbar.jpg" />
      </div>

      <div ref={hideRef} id="glow-hotel">
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/952x721/17047916576878_gleehotelthehidesteakhouse.jpg" />
        <div id="glow-hotel-words">
          <h2> The Hide SteakHouse</h2>
          <p>
            Fine dining grill and steakhouse and a private dining room with
            interiors inspired by Pablo Picasso's The Bull. An unparalleled
            gourmet experience with dry aged meats accompanied by fine wine,
            whiskey and cognac.
          </p>
          <div className="glow-hours">
            <h3>Hours of Operation</h3>
            <p>Close on MOndays</p>
            <p>Open from Tuesday to Sunday</p>
            <p>12:30pm - 10:30pm</p>
          </div>

          <div id="glow-hotel-menu">
          <a href="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17222336457369_Hide.pdf"> View menu <MdRestaurantMenu size={40}/> </a>
          </div>
        </div>
      </div>

      <div ref={rubyRef} id="horizon-hotel">
        <div id="horizon-hotel-words">
          <h2>Ruby NightClub</h2>
          <p>
            A place to feel the beating heart of Nairobi, Ruby is a nightclub
            like no other. Where every detail evokes glamourous glee from the
            crystal chandeliers and sumptuous velvet to the electrifying beats
            at the dance floor. For an even more exclusive experience, Ruby
            offers private access lounges for special celebrations and more
            personalised service.
          </p>

          <div className="horizon-hours">
            <h3>Hours of Operation</h3>
            <p>Every Friday & Saturday</p>
            <p>3:00pm - 1:00am</p>
          </div>
          <div id="horizon-hotel-menu">
          <a href="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/172105230663_Ruby.pdf"> View menu <MdRestaurantMenu size={40}/> </a>
          </div>
        </div>
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/952x721/1704791656798_gleehotelrubynightclub.jpg" />
      </div>

      <div ref={cascadeRef} id="glow-hotel">
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/1200x900/17047916602997_gleehotelcascadecafe.jpg" />
        <div id="glow-hotel-words">
          <h2>Cascade Café</h2>
          <p>
          An all-day café and terrace, Cascade is a place to enjoy curated coffees, infusions, patisserie, small eats and afternoon tea in a garden setting. Cascade offers a wonderful space to work outdoors, catch up with friends, conduct informal meetings or even host small events.
          </p>
          <div className="glow-hours">
            <h3>Hours of Operation</h3>
            <p>Breakfast: 6:30am - 10:30am</p>
            <p>Lunch: 11:00am - 3:00pm</p>
            <p>Dinner: 4:00pm - 10:00pm</p>
          </div>

          <div id="glow-hotel-menu">
          <a href="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17222292379018_Glow.pd"> View menu <MdRestaurantMenu size={40}/> </a>
          </div>
        </div>
      </div>

      <div ref={peacockRef} id="horizon-hotel">
        <div id="horizon-hotel-words">
          <h2>Peacock Bar & Lounge</h2>
          <p>
          An eclectic and eccentric space inspired by the 1920s oriental aesthetic and the exotic and vibrant colours of the peacock, serving contemporary pan-Asian cuisine. A place that exudes the luxurious essence of Glee for relaxed good times, intimate drinks and mellow evenings to acoustic jazz music.
          </p>

          <div className="horizon-hours">
            <h3>Hours of Operation</h3>
            <p>Closed on Mondays</p>
            <p>Open from Tuesday to Sunday.</p>
            <p>3:00pm - 1:00am</p>
          </div>
          <div id="horizon-hotel-menu">
          <a href="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/17222292381165_Peacock.pdf"> View menu <MdRestaurantMenu size={40}/> </a>
          </div>
        </div>
        <img src="https://profitroom-uploads.fra1.digitaloceanspaces.com/thegleehotel/1200x900/17080704669942_gleehotelpeacockloungeandbar.jpg" />
      </div>


    </div>
  );
}

export default Dining;
