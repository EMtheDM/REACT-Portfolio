import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <BsIcons.BsBriefcase />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaRegAddressCard />,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <AiIcons.AiOutlineFile />,
        cName: 'nav-text'
    },
]