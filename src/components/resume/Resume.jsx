import './resume.css';
import * as BsIcons from 'react-icons/bs';
import EricResume from '../resume/Resume.pdf';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resumeTitle">
        <div className="resumeSub">
          <h1 className="resumeName">
            Eric Martin
          </h1>
          <span className="resumeNameSub">
            Software Engineer, Filmmaker, Pastor
          </span>
        </div>
        <a href={EricResume} download className="downloadResume">
          <BsIcons.BsDownload />
          <span className="downloadResumeTitle">Download Resume</span>
        </a>
      </div>

      <div className="resumeContainer">
        <div className="resumeSubContainer">
          <div className="resume-left">
            <div className="resumeEd">
              <h2 className="educationTitle">
                EDUCATION
              </h2>
              <div className="educationHeader">
                <span className="schoolName">Denver University</span>
                <span className="schoolYear">2021-2022</span>
              </div>
              <div className="degree">
                Full Stack Developer Certificate
              </div>
              <div className="educationHeader">
                <span className="schoolName">University of Nevada, Las Vegas</span>
                <span className="schoolYear">2008-2012</span>
              </div>
              <div className="degree">
                Bachelors of Arts, Film
              </div>
            </div>

            <div className="resumeWork">
              <h2 className="workTitle">
                WORK
              </h2>
              <div className="workHeader">
                <span className="workName">
                  Gogo Business Aviation
                </span>
                <span className="workYear">
                  2016 - Present
                </span>
              </div>
              <span className="workPosition">
                Customer Support Team Lead
              </span>
              <div className="workDetails">
                Work with Customer and Technical Support Managers in providing quality and efficient customer service. Manager of day to day operations for Customer Support teams.
              </div>
              <div className="workHeader">
                <span className="workName">
                  Granicus, Inc.
                </span>
                <span className="workYear">
                  2015 - 2016
                </span>
              </div>
              <span className="workPosition">
                Customer Care Engineer
              </span>
              <div className="workDetails">
                Provided client support and technical issue resolution for clients as well as client training for products and services.
              </div>
              <div className="workHeader">
                <span className="workName">
                  Apple Inc.
                </span>
                <span className="workYear">
                  2008 - 2015
                </span>
              </div>
              <span className="workPosition">
                Apple Technician
              </span>
              <div className="workDetails">
                Responsible for handling repairs and replacements of Apple Products, including troubleshooting, diagnosis of Apple computers, and making necessary repairs according to Apple checks and procedures.
              </div>
            </div>
          </div>

          <div className="resume-right">
            <div className="resumeTech">
              <h2 className="techTitle">
                TECHNOLOGY
              </h2>
              <span className="techTopic">Languages: </span>
              <span className="techContent">HTML, CSS, JavaScript, SQL, MongoDB, Node.js, GraphQL</span>
              <span className="techTopic">Libraries: </span>
              <span className="techContent">ReactJS, Bootstrap, jQuery, Node, Express, Sequelize, Mongoose, Handlebars, Bulma</span>
              <span className="techTopic">Applications: </span>
              <span className="techContent">GitHub, Heroku, GitLab, NPM, Compass, dBeaver, Insomnia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
