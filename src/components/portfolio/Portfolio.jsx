import React from 'react';
import "./portfolio.css";
import Product from "../product/Product";
import {products} from "../../data";

const Portfolio = () => {
  return (
    <div className="pl portfolio">
        <div className="pl-texts">
            <h1 className="pl-title">Learn. Create. Grow.</h1>
            <p className="pl-desc">
                In order to create amazing sites and apps, you have to start somewhere. Below are some of my favorite projects that I've had the pleasure of working on. As I've progressed in my craft, I've also fallen in love all over again with coding!
            </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} gh={item.gh} link={item.link} desc={item.desc} />
          ))}
             
        </div>
    </div>
  );
};

export default Portfolio;
