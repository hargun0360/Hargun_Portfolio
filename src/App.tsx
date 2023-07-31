import React from 'react';
import './Styles/main.scss';
import video from './Assets/video3.mp4';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';

function App() {
  return (
    <div className="App">
      <video className='body-overlay' muted autoPlay loop>
        <source src={video}></source>
      </video>
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
