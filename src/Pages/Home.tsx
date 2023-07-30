import React from 'react'
import Hamburger from '../Components/Hamburger'
import Sidebar from '../Components/Sidebar'
import Intro from '../Components/Intro'

const Home = () => {
  return (<>
        {/* <Hamburger />
        <Sidebar /> */}
        {/* <Intro /> */}
        <main className="Hargun-main">
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <Intro />
              <section id="home" className="scroll-to-page page-section hero-section">
                  <div className="custom-container">
                    <div className="hero-content content-width">
                      <div className="section-header"></div>
                      <p className="scroll-animation"></p>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </main>

    </>)
}

export default Home