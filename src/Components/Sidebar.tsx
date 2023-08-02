import React from 'react';
import { Link, LinkProps } from 'react-scroll';

// Custom type to omit the 'href' property from LinkProps
type ScrollLinkProps = Omit<LinkProps, 'href'>;

function Sidebar() {
  return (
    <ul className='sidebar'>
      <li>
        <Link spy={true} smooth={true} offset={0} duration={700} className='scroll to' to='home' href=''>
          <span>Home</span>
          <i className='las la-home'></i>
        </Link>
      </li>
      <li>
        <Link spy={true} smooth={true} offset={50} duration={700} className='scroll to' to='about' href=''>
          <span>About</span>
          <i className='lar la-user'></i>
        </Link>
      </li>
      <li>
        <Link spy={true} smooth={true} offset={50} duration={700} className='scroll to' to='experience' href=''>
          <span>Experiences</span>
          <i className='las la-stream'></i>
        </Link>
      </li>
      <li>
        <Link spy={true} smooth={true} offset={50} duration={700} className='scroll to' to='project' href=''>
          <span>Projects</span>
          <i className='las la-grip-vertical'></i>
        </Link>
      </li>
      <li>
        <Link spy={true} smooth={true} offset={50} duration={700} className='scroll to' to='skills' href=''>
          <span>Skills</span>
          <i className='las la-shapes'></i>
        </Link>
      </li>
      <li>
        <Link spy={true} smooth={true} offset={50} duration={700} className='scroll to' to='profiles' href=''>
          <span>Profiles</span>
          <i className='las la-code'></i>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
