
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
                   <a href="https://leetcode.com/hargunbit1001/" target="_blank"> <img src={leetcode} alt="leetcode" /></a> 
                    <a href="https://codeforces.com/profile/bit_1001" target="_blank"><img src={codeforces} alt="codeforces" /></a> 
                    <a href="https://www.codechef.com/users/hargun_0360" target="_blank"><img src={codechef} className="codechef" alt="codechef" /></a> 
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
