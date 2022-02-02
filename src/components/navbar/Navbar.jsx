import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
  return (
      
  <div className='nav'>
    <IconContext.Provider value={{ color: '#fff' }}>
    <div className="navbar">
        <Link to="#" className="menuBars">
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <span className="nav-title">Menu</span>
        <div className="nav-name">
            Eric Martin
        </div>
    </div>
    <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
        <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to='#' className="menu-bars">
                    <ImIcons.ImCross />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
  </div>
  );
};

export default Navbar;
