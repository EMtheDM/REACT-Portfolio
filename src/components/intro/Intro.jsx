import React, { useContext } from "react";
import "./intro.css";
import Me from "../../img/me.png";
import { ThemeContext } from "../../context";

const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Eric Martin</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                           <div style={{ color:darkMode ? "white" : "#003d7a" }}className="i-title-item">Web Developer</div> 
                           <div style={{ color:darkMode ? "white" : "#003d7a" }} className="i-title-item">UI/UX Designer</div> 
                           <div style={{ color:darkMode ? "white" : "#003d7a" }} className="i-title-item">Filmmaker/Photographer</div> 
                           <div style={{ color:darkMode ? "white" : "#003d7a" }} className="i-title-item">Pastor</div> 
                           <div style={{ color:darkMode ? "white" : "#003d7a" }} className="i-title-item">Gamer</div> 
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

export default Intro