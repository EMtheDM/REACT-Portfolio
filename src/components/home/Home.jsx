import React from "react";
import "./home.css";
import Me from "../../img/me.png";

const Home = () => {
    return (
        <div className="i home">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Eric Martin</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                           <div className="i-title-item">Web Developer</div> 
                           <div className="i-title-item">UI/UX Designer</div> 
                           <div className="i-title-item">Filmmaker/Photographer</div> 
                           <div className="i-title-item">Pastor</div> 
                           <div className="i-title-item">Gamer</div> 
                        </div>
                    </div> 
                    <p className="i-desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Home