import React, { useState } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_d08tomv', 'template_s23y5ez', formRef.current, 'user_tNvlABxMkv2wwnLgNxS4f')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
  <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Let's discuss your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img 
                        src={Phone} 
                        alt="" 
                        className="c-icon"
                      />
                      +1 919.272.2201
                  </div>
                  <div className="c-info-item">
                      <img 
                        src={Email} 
                        alt="" 
                        className="c-icon"
                      />
                      eric_martin@me.com
                  </div>
                  <div className="c-info-item">
                      <img 
                        src={Address} 
                        alt="" 
                        className="c-icon"
                      />
                      6824 Morrison Dr. Frederick, CO 80530 USA
                  </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>Like what you see? Hire me!</b> Please complete the form below to get in touch with me.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                  <input style={{ backgroundColor: darkMode && "#333" }}  type="text" placeholder="Subject" name="user_subject" />
                  <input style={{ backgroundColor: darkMode && "#333" }}  type="text" placeholder="Email" name="user_email" />
                  <textarea style={{ backgroundColor: darkMode && "#333" }}  rows="5" placeholder="Message" name="message"/>
                  <button>Submit</button>
                  {done && "Thank you..."}
              </form>
          </div>
      </div>
  </div>
  );
};

export default Contact;
