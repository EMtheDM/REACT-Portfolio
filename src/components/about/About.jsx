import React, { useContext } from "react";
import "./about.css";
// import Award from "../../img/award.png";
import { ThemeContext } from "../../context";

const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a">
      <div className="a-left">
        <div style={{ backgroundColor:darkMode ? "white" : "#003d7a" }} className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?cs=srgb&dl=pexels-josh-hild-4424567.jpg&fm=jpg" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
          <p className="a-desc">
            My name is Eric Martin. I'm a Full Stack Developer located in Denver, CO. I have a passion for intuitive websites. I have over 10 years of customer service experience that I bring to each and every project. I truly am an end-user focused developer.
          </p>
          <p className="a-desc">
            I graduated from UNLV with a Film degree originally as I love the process of creation. I took that same passion and bring it to all of my projects in web development.
          </p>
          <p className="a-desc">
            I'm a fan of video games, D&D, pretty much every sport, and of course...movies!
          </p>
          <p className="a-desc">
            I utilize the MERN stack for all of my projects: (MongoDB/MySQL, Express, React, Node)
          </p>
          <p className="a-desc">
            Interested in the entire stack of development and working on ambitious projects with positive people.
          </p>
          {/* <div className="a-tech"> */}
            {/* <img src={Award} alt="" className="a-award-img" /> */}
            {/* <div className="a-tech-texts">
              <h2 style={{ color:darkMode ? "white" : '#555' }}className="a-tech-title">Technologies</h2>
              <div>
                <ul className="a-tech-desc">
                  <h3 className="a-tech-lang">Languages</h3>
                  <li className="a-tech-item">HTML5</li>
                  <li className="a-tech-item">CSS3</li>
                  <li className="a-tech-item">JavaScript</li>
                  <li className="a-tech-item">SQL</li>
                </ul>
                <ul className="a-tech-desc">
                  <h3 className="a-tech-db">Databases</h3>
                  <li className="a-tech-item">MySQL</li>
                  <li className="a-tech-item">MongoDB</li>
                  <li className="a-tech-item">Sequelize</li>
                  <li className="a-tech-item">Mongoose</li>
                </ul>
                <ul className="a-tech-desc">
                  <h3 className="a-tech-frame">Frameworks</h3>
                  <li className="a-tech-item">React</li>
                  <li className="a-tech-item">Bootstrap</li>
                  <li className="a-tech-item">Bulma</li>
                  <li className="a-tech-item">jQuery</li>
                </ul>
                <ul className="a-tech-desc">
                  <h3 className="a-tech-servers">Servers</h3>
                  <li className="a-tech-item">Node</li>
                  <li className="a-tech-item">Express</li>
                  <li className="a-tech-item">Rest</li>
                  <li className="a-tech-item"></li>    
                </ul>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default About