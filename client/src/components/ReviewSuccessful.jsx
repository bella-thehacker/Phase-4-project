import React, { useState } from 'react';
import { MdOutlineTransitEnterexit } from 'react-icons/md';
import '../css/membership.css'; // Ensure your styles are imported

const ReviewSuccessful = ({ onClose }) => {
  const [closePopup, setClosePopup] = useState(false);

  const close = () => {
    setClosePopup(true);
    onClose(); // Call the parent onClose to notify that the popup is closed
  };

  return !closePopup ? (
    <div className='pop-up'>
      <div className='popup-inner'>
        <button id='popup-button' onClick={close}>
          Close <MdOutlineTransitEnterexit />
        </button>
        <div>
          <img
            src='https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000'
            alt='Success Icon'
          />
          <h1 id='popup-h1'>Review Submitted Successfully!</h1>
          <p>Thank you for your feedback. We appreciate your review!</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ReviewSuccessful;