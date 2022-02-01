import React from "react";
import "./home.css";
import Me from "../../img/me.png";

const Home = () => {
    return (
        <div className="i home">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name">Eric Martin</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                           <div className="i-title-item">Web Developer</div> 
                           <div className="i-title-item">Software Engineer</div> 
                           <div className="i-title-item">Filmmaker</div> 
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

export default Home;