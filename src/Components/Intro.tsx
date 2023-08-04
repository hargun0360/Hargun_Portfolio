import React from 'react'
import logo from "../Assets/logo (1).svg"
import me from "../Assets/Hargun Background Removed.svg"
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
                  <a href='https://www.linkedin.com/in/hargun-singh-4a10a7212/?originalSubdomain=in' target='_blank'>
                    <i className='lab la-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/hargun0360' target='_blank'>
                  <i className='lab la-github'></i>
                  </a>
                </li>
                <li>
                  <a href='mailto:hargunbit1001@gmail.com' target='_blank'>
                  <i className="las la-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href='https://medium.com/@hargunbit1001' target='_blank'>
                  <i className="lab la-medium"></i>
                  </a>
                </li>
            </ul>
            <a className='resume' href='https://drive.google.com/file/d/1YwRqfR2x17tAOv4DOi4kQ24QK-r23Xig/view?usp=sharing' target='_blank'>
            <i className="las la-file"></i>
             Resume
            </a>
        </div>
    </>)
}

export default Intro;
