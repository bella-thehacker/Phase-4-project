import "../css/corporate.css"; // Make sure to create this CSS file

const Corporate = () => {
  return (
    <div className="corporate-container">
      <header className="corporate-header">
        <h1>Corporate Facilities</h1>
        <p>
          Explore professionally organized and efficiently planned events and
          meetings in luxury conference suites and meeting rooms.
        </p>
      </header>

      <section className="corporate-description">
        <h2>Removed from the hustle and bustle</h2>
        <p>
          Our corporate facilities offer the coveted combination of privacy and
          proximity to Nairobi’s Central Business District. Equipped with the
          latest communication and presentation technology, our conference
          facilities and meeting rooms are a stylish venue for board meetings,
          strategy sessions, and away-days. The total seclusion of our
          conference suite is an inspiring arena for business networking or
          in-house discussions while ensuring functionality for instant global
          communication.
        </p>
      </section>

      <section className="corporate-facilities">
        <h2>Sophisticated, Impressive & Efficient</h2>
        <p>
          We offer a variety of corporate facilities from intimate meeting rooms
          to larger conference suites. Our experienced staff are on hand to
          assist where necessary while affording you the privacy you may
          require.
        </p>
        <div className="rooms">
          <div className="room">
            <h3>Greenhills</h3>
            <p>172 square meters, 70 delegates (max)</p>
            <button>View floorplan</button>
          </div>
          <div className="room">
            <h3>Havana</h3>
            <p>136 square meters, 60 delegates (max)</p>
            <button>View floorplan</button>
          </div>
          <div className="room">
            <h3>Board Room</h3>
            <p>48 square meters, 15 delegates (max)</p>
            <button>Make an enquiry</button>
          </div>
          <div className="room">
            <h3>Bimini</h3>
            <p>24 square meters, 8 delegates (max)</p>
            <button>Make an enquiry</button>
          </div>
          <div className="room">
            <h3>Pilar</h3>
            <p>20 square meters, 6 delegates (max)</p>
            <button>Make an enquiry</button>
          </div>
        </div>
      </section>

      <section className="conference-packages">
        <h2>Conference Packages</h2>
        <div className="package">
          <h3>Standard Meeting Package</h3>
          <h4>Half Day Package</h4>
          <p>KES 6,200 per person inclusive of taxes</p>
          <ul>
            <li>
              Welcome break: Tea, coffee, assorted pastries, fruit juice, and a
              healthy option.
            </li>
            <li>
              Mid-Morning/Afternoon Break: Tea, coffee, hot snacks, assorted
              sandwiches, and fruit slices.
            </li>
            <li>
              Lunch: 3 course set / Buffet menu and a soft drink in the
              Brasserie.
            </li>
          </ul>
        </div>
        <div className="package">
          <h4>Full Day Package</h4>
          <p>KES 6,800 per person inclusive of taxes</p>
          <ul>
            <li>
              Welcome break: Tea, coffee, assorted pastries, fruit juice, and a
              healthy option.
            </li>
            <li>
              Mid-Morning Break: Tea, coffee, hot snacks, assorted sandwiches,
              and fruit slices.
            </li>
            <li>
              Lunch: 3 course set / Buffet menu and a soft drink in the
              Brasserie.
            </li>
            <li>Afternoon Break: Tea, coffee with cookies and tea cakes.</li>
            <li>½ litre water morning and afternoon.</li>
            <li>Meeting provisions: Stationery, LCD projector, and Wi-Fi.</li>
          </ul>
        </div>
        <button>View our Full Banqueting & Conferencing Brochure Here</button>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          To contact the corporate sales team, please call +254 (0) 709 195 256
        </p>
        <p>
          Email: <a href="mailto:sales@hemingways.co">sales@hemingways.co</a>
        </p>
      </section>
    </div>
  );
};

export default Corporate;
