import React from 'react';
import '../styles/home.css';
import bookpg from '../book.jpg';
import videoSource from '../books.mp4';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup.js';
import '../styles/Popup.css';
import { useState } from 'react';

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='Content'>
        <div className='SubContent'>
          <h1>Blog App</h1>
          <p>Manage your Books with Ease</p>
          <button type='button' className='btn btn-outline-dark' onClick={() => setButtonPopup(true)}>
            Wishes💌
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Success.... ✨</h3>
            <p>Wishing you the best for every step in your journey.
</p>
          </Popup>
          <img src={bookpg} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default Home;