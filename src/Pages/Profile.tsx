
import leetcode from "../Assets/icons8-level-up-your-coding-skills-and-quickly-land-a-job-96 (1).png"
import codeforces from "../Assets/icons8-codeforces.-programming-competitions-and-contests,-programming-community.-96.png"
import codechef from "../Assets/codechef.png"

function Profile() {

  return (
    <>
      <section
        className="project-area page-section scroll-to-page"
        id="profiles"
      >
        <div className="custom-container">
          <div className="prject-content content-width">
            <div className="section-header">
              <h4 className="subtitle scroll-animation">
              <i className='las la-code'></i>
                Coding Profiles
              </h4>
            </div>
            <div className="coding-profile">
                <h1>Accomplished <span>500+</span> Data Structure and Algorithm Problems on Multiple Platforms.</h1>
                <div className="links">
                    <img src={leetcode} alt="leetcode" />
                    <img src={codeforces} alt="codeforces" />
                    <img src={codechef} className="codechef" alt="codechef" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
