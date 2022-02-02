import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a about">
      <div className="a-left">
        <div className="a-card">
          <img src="https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?cs=srgb&dl=pexels-josh-hild-4424567.jpg&fm=jpg" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            "I'm not superstitious, but I am a little stitious." <span className="a-quote">- Michael Scott</span>
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
          <p className="a-desc a-mobile">
            I utilize the MERN stack for all of my projects: (MongoDB/MySQL, Express, React, Node)
          </p>
          <p className="a-desc a-mobile">
            Interested in the entire stack of development and working on ambitious projects with positive people.
          </p>
          <h2>Technologies</h2>
          <ul className="a-tech-list">
              <span className="a-tech-list-title">Languages:</span>
              <li className="a-tech-list-item">HTML</li>
              <li className="a-tech-list-item">CSS</li>
              <li className="a-tech-list-item">JavaScript</li>
              <li className="a-tech-list-item">SQL</li>
              <li className="a-tech-list-item">MongoDb</li>
              <li className="a-tech-list-item">GraphQL</li>
              <li className="a-tech-list-item">Node.js</li>
          </ul>
          <ul className="a-tech-list">
              <span className="a-tech-list-title">Libraries:</span>
              <li className="a-tech-list-item">ReactJS</li>
              <li className="a-tech-list-item">Bootstrap</li>
              <li className="a-tech-list-item">jQuery</li>
              <li className="a-tech-list-item">Node</li>
              <li className="a-tech-list-item">Handlebars</li>
              <li className="a-tech-list-item">Sequelize</li>
              <li className="a-tech-list-item">Mongoose</li>
              <li className="a-tech-list-item">Bulma</li>
          </ul>
          <ul className="a-tech-list">
              <span className="a-tech-list-title">Applications:</span>
              <li className="a-tech-list-item">GitHub</li>
              <li className="a-tech-list-item">Heroku</li>
              <li className="a-tech-list-item">GitLab</li>
              <li className="a-tech-list-item">NPM</li>
              <li className="a-tech-list-item">Compass</li>
              <li className="a-tech-list-item">dBeaver</li>
              <li className="a-tech-list-item">Insomnia</li>
          </ul>
      </div>
    </div>
  );
};

export default About