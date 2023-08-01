import React from "react";
import "./Styles/main.scss";
import video from "./Assets/video3.mp4";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <video className="body-overlay" muted autoPlay loop>
        <source src={video}></source>
      </video>
      <Home />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Profile />
      <section
        className="footer-area page-section scroll-to-page"
        id="project"
      >
        <div className="custom-container">
          <div className="prject-content content-width">
            <div className="footer">
          <h3>Designed by Drake And Developed By Hargun Singh With Love ❤️</h3>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
