import React from 'react';
// import { useState, useEffect } from 'react';
import './App.css';
import happy from './assets/happy.mp4';
import Education from './Education';


function App() {

  return (
    <div>
      <div className='container header'>
        <h1>Beat Boredom</h1>
        <p className='header_p'>Discover Your Next Adventure!</p>
        <p className='header_p'>Click the button and get inspired with activities tailored to your mood and interests.</p>
        <p className='header_p'>From relaxation to adventure, we've got ideas for everyone!</p>
        {/* <button className='header_btn'>Get Inspired</button> */}
      </div>

      <div className='container'>
        <h2>Not sure what to do? Let us help!</h2>
      </div>

      <Education />

      <video className='video' autoPlay loop muted playsInline controls>
        <source src={happy} type='video/mp4' />
      </video>

    </div>
  )
}

export default App
