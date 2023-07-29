import React from 'react';

function Sidebar(){

    return (<>
       
              <ul className='sidebar'>
                  <li>
                    <a className='scroll-to active' href="#home">
                      <span>Home</span>
                      <i className='las la-home'></i>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#about">
                      <span>About</span>
                      <i className='lar la-user'></i>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                    <span>Projects</span>
                    <i className='las la-grip-vertical'></i>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                    <span>Experiences</span>
                    <i className='las la-stream'></i>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                    <span>Skills</span>
                    <i className='las la-shapes'></i>
                    </a>
                  </li>
                  <li>
                    <a className='scroll-to ' href="#home">
                      <span>Profiles</span>
                      <i className='las la-code'></i>
                    </a>
                  </li>
              </ul>
       </>);
}

export default Sidebar