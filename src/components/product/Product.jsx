import React from 'react';
import "./product.css";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

const Product = ({title, img, link, gh, desc, tech}) => {
  return (
    <div className="p-box">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className='p'>
          <img src={img} alt="" className="p-img" />
        </a>
        <h2 className="p-title"> {title} </h2>
        <p className='p-desc'>
          {desc}
        </p>
        <p className='p-tech'>
          {tech}
        </p>
        <div className='p-icon'>        
        <a href={gh} target="_blank" rel="noreferrer" className='p-icon'>
          <AiIcons.AiFillGithub />
        </a>
        <a href={link} target="_blank" rel="noreferrer" className='p-icon'>
          <CgIcons.CgWebsite />
        </a>
      </div>
    </div>
  );
};

export default Product;
