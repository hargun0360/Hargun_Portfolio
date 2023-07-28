import React from 'react';

function Hamburger(){
    return (<>
        <div className='icon-menu'>
          <span className='bar' />
          <span className='bar' />
        </div>
        <div className='responsive-sidebar-menu active'>
          <div className='overlay active'></div>
          <div className="sidebar-menu-inner active">
            <div className="menu-wrap">
              <p>Menu</p>
              <ul className='scroll-nav-respoonsive active'>
                  <li>
                    <a className='scroll-to active' href="#home">
                      <i className='las la-home'></i>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#about">
                      <i className='lar la-user'></i>
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                    <i className='las la-grip-vertical'></i>
                      <span>Projects</span>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                    <i className='las la-stream'></i>
                      <span>Experiences</span>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                    <i className='las la-shapes'></i>
                      <span>Skills</span>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                      <i className='las la-code'></i>
                      <span>Profiles</span>
                    </a>
                  </li>
              </ul>
            </div>
            <div className="sidebar-social">
              <p>Social</p>
              <ul className='social-links'>
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
              </ul>
            </div>
          </div>
        </div> 
       </>);
}

export default Hamburger