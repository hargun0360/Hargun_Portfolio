import React , {useEffect , useState} from "react";
import "./Styles/main.scss";
import video from "./Assets/video3.mp4";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Profile from "./Pages/Profile";

function App() {

  const [menuLi, setMenuLi] = useState<NodeListOf<HTMLAnchorElement> | null>(null);
  const [menuLiHam, setMenuLiHam] = useState<NodeListOf<HTMLAnchorElement> | null>(null);
  const [sections, setSections] = useState<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    setMenuLi(document.querySelectorAll('.sidebar li a'));
    setMenuLiHam(document.querySelectorAll('.scroll-nav-respoonsive li a'));
    setSections(document.querySelectorAll('section')); 
  }, []);

  function activeMenu() {
    if (menuLi === null || menuLiHam === null || sections === null) return;

    let len = sections.length - 1; // Adjust the length since arrays are 0-indexed

    // Find the section index whose offset is less than or equal to the current scroll position
    while (len >= 0 && window.scrollY + 97 < sections[len].offsetTop) {
      len--;
    }

    // Reset all menu items to remove the 'active' class
    menuLi.forEach((sec: HTMLAnchorElement) => {
      sec.classList.remove('active');
    });
    menuLiHam.forEach((sec: HTMLAnchorElement) => {
      sec.classList.remove('active');
    });

    // Add the 'active' class to the corresponding menu item
    if (len >= 0) {
      menuLi[len].classList.add('active');
      menuLiHam[len].classList.add('active');
    }
  }

  useEffect(() => {
    activeMenu();
    window.addEventListener('scroll', activeMenu);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', activeMenu);
    };
  }, [menuLi, sections , menuLiHam]);
  // Rest of your component code...
  
  return (
    <div className="App">
      <video className="body-overlay" muted autoPlay loop>
        <source src={video}></source>
      </video>
      <Home />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Profile />
      <section
        className="footer-area page-section scroll-to-page"
        id="project"
      >
        <div className="custom-container">
          <div className="prject-content content-width">
            <div className="footer">
          <h3>Designed by Drake And Developed By Hargun Singh With Love ❤️</h3>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
