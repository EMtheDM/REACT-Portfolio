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
      </div>
    </div>
  );
};

export default About