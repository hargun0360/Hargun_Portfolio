import React , {useState} from 'react';
import { Link, LinkProps } from 'react-scroll';

// Custom type to omit the 'href' property from LinkProps
type ScrollLinkProps = Omit<LinkProps, 'href'>;

function Hamburger(){

  const [active, setActive] = useState<boolean>(false);

    return (<>
        <div className='icon-menu' onClick={() => setActive(true)}>
          <span className='bar' />
          <span className='bar' />
        </div>
        <div className={active ? 'responsive-sidebar-menu active' : 'responsive-sidebar-menu'}>
          <div className='overlay' onClick={() => setActive(false)}></div>
          <div className="sidebar-menu-inner">
            <div className="menu-wrap">
              <p>Menu</p>
              <ul className='scroll-nav-respoonsive'>
                  <li>
                    <Link spy={true} smooth={true} offset={0} duration={700} className='scroll-to ' to="home" href=''>
                      <i className='las la-home'></i>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link spy={true} smooth={true} offset={50} duration={700} className='scroll-to ' to="about" href=''>
                      <i className='lar la-user'></i>
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link spy={true} smooth={true} offset={50} duration={700} className='scroll-to ' to="experience" href=''>
                    <i className='las la-stream'></i>
                      <span>Experiences</span>
                    </Link>
                  </li>
                  <li>
                    <Link spy={true} smooth={true} offset={50} duration={700} className='scroll-to ' to="project" href=''>
                    <i className='las la-grip-vertical'></i>
                      <span>Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link spy={true} smooth={true} offset={50} duration={700} className='scroll-to ' to="skills" href=''>
                    <i className='las la-shapes'></i>
                      <span>Skills</span>
                    </Link>
                  </li>
                  <li>
                    <Link spy={true} smooth={true} offset={50} duration={700} className='scroll-to ' to="profiles" href=''>
                      <i className='las la-code'></i>
                      <span>Profiles</span>
                    </Link>
                  </li>
              </ul>
            </div>
            <div className="sidebar-social">
              <p>Social</p>
              <ul className='social-links'>
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
                  <a href="mailto:hargunbit1001@gmail.com" target='_blank'>
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