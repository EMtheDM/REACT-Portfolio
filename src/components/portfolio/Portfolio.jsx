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
                Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more inside.
            </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
             
        </div>
    </div>
  );
};

export default Portfolio;
