import React from 'react'
import logo from "../Assets/logo.png"
import me from "../Assets/hargun_singh.png"
function Intro(){
  return (<>
        <div className="left-sidebar">
            <div className="sidebar-header">
            <img src={logo} alt="logo" />
            <span className="designation">Full Stack Web Developer</span>
            </div>
            <img src={me} alt="Hargun Singh" className="me" />
            <h2 className="name">&lt;Hargun Singh /&gt;</h2>
            <p className="intro-line">I love exploring new things!</p>
            <ul className="social-profile">
            <li>
                  <a>
                    <i className='lab la-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a>
                  <i className='lab la-github'></i>
                  </a>
                </li>
                <li>
                  <a>
                  <i className="las la-envelope"></i>
                  </a>
                </li>
                <li>
                  <a>
                  <i className="lab la-medium"></i>
                  </a>
                </li>
            </ul>
            <a className='resume'>
            <i className="las la-file"></i>
             Resume
            </a>
        </div>
    </>)
}

export default Intro;
