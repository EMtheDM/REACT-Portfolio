import React from 'react';
import "./product.css";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

const Product = ({img, link, gh, desc}) => {
  return (
    <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
        <p className='p-desc'>
          {desc}
        </p>        
        <a href={gh} target="_blank" rel="noreferrer" className='p-gh'>
          <AiIcons.AiFillGithub />
        </a>
        <a href={link} target="_blank" rel="noreferrer" className='p-web'>
          <CgIcons.CgWebsite />
        </a>
    </div>
  );
};

export default Product;
