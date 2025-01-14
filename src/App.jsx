import React from 'react';
import './App.css';
import happy from './assets/happy.mp4';
import Activity from './Activity';


function App() {

  const allActivities = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  return (
    <div>

      <div className='container header'>
        <h1>Beat Boredom</h1>
        <p className='header_p'>Discover Your Next Adventure!</p>
        <p className='header_p'>Click the button and get inspired with activities tailored to your mood and interests.</p>
        <p className='header_p'>From relaxation to adventure, we've got ideas for everyone!</p>
      </div>

      <div className='container'>
        <h2>Not sure what to do?  We've got some ideas!</h2>
      </div>

      <div className="container_activity">
        {allActivities.map((element, index) => (
          <Activity key = {index}
          activity = {element}
          index = {index}/>
        ))}
      </div>

      <div className='container'>
        <button>Get More!</button>
      </div>



  







      <video className='video' autoPlay loop muted playsInline controls>
        <source src={happy} type='video/mp4' />
      </video>

    </div>
  )
}

export default App
