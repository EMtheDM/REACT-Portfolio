import './footer.css';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerIcons">
                <Link to='https://github.com/EMtheDM' className="github" target="_blank">
                    <AiIcons.AiFillGithub />
                </Link>
                <Link to='https://www.linkedin.com/in/emthedm/' className="linkedIn" target="_blank">
                    <AiIcons.AiFillLinkedin />
                </Link>
                <Link to='https://www.instagram.com/emthedm1/' className="instagram" target="_blank">
                    <FaIcons.FaInstagram />
                </Link>
                <Link to='https://twitter.com/EMtheDM1' className="twitter" target="_blank">
                    <FaIcons.FaTwitter />
                </Link>
            </div>
        </div>
    )
};

export default Footer;