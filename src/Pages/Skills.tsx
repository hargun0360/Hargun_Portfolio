import Skills_data from "../Components/Skills_data";
import postman from "../Assets/62cc1b51150d5de9a3dad5f8.png"

function Skills() {

    const skill_obj = Skills_data();

  return (
    <>
      <section
        className="project-area page-section scroll-to-page"
        id="skills"
      >
        <div className="custom-container">
          <div className="prject-content content-width">
            <div className="section-header">
              <h4 className="subtitle scroll-animation">
              <i className='las la-shapes'></i>
                Skills
              </h4>
            </div>
            <div className="my-skills">
                <h1>I like to take responsibility to craft good user experiences using <span>my skills</span>.</h1>
                <div className="frontend-development">
                    <h3>Frontend Development</h3>
                    <div>
                      { skill_obj.frontend.map((img , index)=>(
                        <img src={img} key={index} alt="tech-stack" />
                       ))}
                    </div>
                </div>
                <div className="Backend-development">
                    <h3>Backend Development</h3>
                    <div>
                      { skill_obj.backend.map((img , index)=>(
                        <img key={index} src={img} alt="tech-stack" />
                       ))}
                       <img src={postman} width={"100px"} height={"100px"} alt="tech-stack" />
                    </div>
                </div>
                <div className="Databases">
                    <h3>Databases</h3>
                    <div>
                      { skill_obj.databases.map((img , index)=>(
                        <img src={img} key={index} alt="tech-stack" />
                       ))}
                    </div>
                </div>
                <div className="Other-Skills">
                    <h3>Other Skills</h3>
                    <div>
                      { skill_obj.others.map((img,index)=>(
                        <img src={img} key={index} alt="tech-stack" />
                       ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
