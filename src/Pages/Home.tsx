import React from 'react'
import Hamburger from '../Components/Hamburger'
import Sidebar from '../Components/Sidebar'
import Intro from '../Components/Intro'
import Type from '../Components/Type'
import My_Projects from '../Components/My_Projects'

const Home = () => {
  return (<>
        <Hamburger />
        <Sidebar />
        {/* <Intro /> */}
        <main className="Hargun-main">
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <Intro />
              <section id="home" className="scroll-to-page page-section hero-section">
                  <div className="custom-container">
                    <div className="hero-content content-width">
                      <div className="section-header">
                        <h4 className='subtitle scroll-animation'>
                          <i className='las la-home'></i>
                           Introduce
                        </h4>
                        <h2 className="scroll-animation">
                          Hi There!{" "} 
                          <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                          </span>
                        </h2>
                        <h1 className="heading-name">
                          I'M
                          <strong className="main-name"> Hargun Singh</strong>
                        </h1>
                        <h1 className="type-writter-effect">
                         <Type />
                        </h1>
                      </div>
                      <p className="para scroll-animation">
                       I am an enthusiastic learner who thrives on acquiring new skills and applying them in real-life projects,
                       constantly evolving to create innovative and impactful solutions.
                      </p>
                      <My_Projects />
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </main>

    </>)
}

export default Home