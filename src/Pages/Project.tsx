import Card from "../Components/Card";
import Project_data from "../Components/Project_data";

function Project() {
 const projects = Project_data();
  return (
    <>
      <section
        className="project-area page-section scroll-to-page"
        id="project"
      >
        <div className="custom-container">
          <div className="prject-content content-width">
            <div className="section-header">
              <h4 className="subtitle scroll-animation">
                <i className="las la-grip-vertical"></i>
                Projects
              </h4>
            </div>
            <div className="project-cards">
                {projects.map((project , index) =>(
                    <Card key={index} {...project} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
