import illustration from '../Assets/round-text.png'
import { Link, LinkProps } from 'react-scroll';

// Custom type to omit the 'href' property from LinkProps
type ScrollLinkProps = Omit<LinkProps, 'href'>;

function My_Projects(){
    return(<>
        <Link to='project' href='' spy={true} smooth={true} offset={50} duration={700} className="go-to-project-btn scroll-to scroll-animation">
            <img src={illustration} alt="projects" />
            <i className='las la-arrow-down'></i>
        </Link>
    </>);
}

export default My_Projects;