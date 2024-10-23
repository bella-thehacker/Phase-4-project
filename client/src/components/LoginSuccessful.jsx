import React, { useState } from 'react';
import { MdOutlineTransitEnterexit } from 'react-icons/md';
import '../css/membership.css'; 

function LoginSuccessful() {
  const [closePopup, setClosePopup] = useState(false);

  const close = () => {
    setClosePopup(true);
  };

  return !closePopup ? (
    <div className='pop-up'>
      <div className='popup-inner'>
        <button id='popup-button' onClick={close}>
          Close<MdOutlineTransitEnterexit />
        </button>
        <div>
          <img src='https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000' alt='Success Icon' />
          <h1 id='popup-h1'>Congratulations! You Have Successfully Logged In</h1>
          
        </div>
      </div>
    </div>
  ) : null;
}

export default LoginSuccessful;
