import illustration from '../Assets/round-text.png'

function My_Projects(){
    return(<>
        <a href='#projects' className="go-to-project-btn scroll-to scroll-animation">
            <img src={illustration} alt="projects" />
            <i className='las la-arrow-down'></i>
        </a>
    </>);
}

export default My_Projects;