import './footer.css';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerIcons">
                <a href="https://github.com/EMtheDM" className="github" target="_blank">
                    <AiIcons.AiFillGithub />
                </a>
                <a href='https://www.linkedin.com/in/emthedm/' className="linkedIn" target="_blank">
                    <AiIcons.AiFillLinkedin />
                </a>
                <a href='https://www.instagram.com/emthedm1/' className="instagram" target="_blank">
                    <FaIcons.FaInstagram />
                </a>
                <a href='https://twitter.com/EMtheDM1' className="twitter" target="_blank">
                    <FaIcons.FaTwitter />
                </a>
            </div>
        </div>
    )
};

export default Footer;