import React, { useState } from 'react';
import './contact.css';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import isEmail from 'validator/lib/isEmail';
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [error, setError] = useState("");
    const [checkName, setNameCheck] = useState("Name");
    const [checkSubject, setSubjectCheck] = useState("Subject");
    const [checkEmail, setEmailCheck] = useState("Email");
    const [checkMessage, setMessageCheck] = useState("Message");

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_d08tomv', 'template_s23y5ez', formRef.current, 'user_tNvlABxMkv2wwnLgNxS4f')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            formRef.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleName = (e) => {
        e.preventDefault();
        (!e.target.value.length) ? setNameCheck("Name is required") : setNameCheck("Name");
    }
    const handleSubject = (e) => {
        e.preventDefault();
        (!e.target.value.length) ? setSubjectCheck("Subject is required") : setSubjectCheck("Subject");
    }
    const handleEmail = (e) => {
        e.preventDefault();
        (!e.target.value.length) ? setEmailCheck("Email is required") : setEmailCheck("Email");
    }
    const handleMessage = (e) => {
        e.preventDefault();
        (!e.target.value.length) ? setMessageCheck("Message is required") : setMessageCheck("Message");
    }
    const handleChange = (e) => {
        e.preventDefault();
        isEmail(e.target.value) ? setError("") : setError("Please enter a valid email");
    }

  return (
  <div className="c contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Let's discuss your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <div className="c-icon">
                          <MdIcons.MdPhoneIphone />
                      </div>
                      <a href="tel:919-272-2201" target="_blank" rel='noreferrer' className='c-link'>+1 919.272.2201</a>
                  </div>
                  <div className="c-info-item">
                      <div className="c-icon">
                          <HiIcons.HiOutlineMail />
                      </div>
                      <a href="mailto:eric_martin@me.com" target="_blank" rel='noreferrer' className='c-link'>eric_martin@me.com</a>
                  </div>
                  <div className="c-info-item">
                      <div className="c-icon">
                          <BiIcons.BiMap />
                      </div>
                      <a href="http://maps.google.com/?q=6824 Morrison Dr, Frederick, Colorado, 80530" target="_blank" rel='noreferrer' className='c-link'>6824 Morrison Dr. Frederick, CO 80530</a>
                  </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>Like what you see? Reach out!</b> Please complete the form below to get in touch with me.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input className="input-name" type="text" placeholder={checkName} name='{user_name' onBlur={handleName} className={checkName === "Name is required" ? "inactive" : "active"} required/>

                  <input className="input-subject" type="text" placeholder={checkSubject} name={'user_subject'} onBlur={handleSubject} className={checkSubject === "Subject is required" ? "inactive" : "active"} required />

                  <input className="input-email" type="text" placeholder={checkEmail} name={"user_email"} onBlur={handleEmail} onChange={handleChange} className={checkEmail === "Email is required" ? "inactive" : "active"} required />
                  <p className='errorMessage'>{error}</p>

                  <textarea rows="5" placeholder={checkMessage} name="message" onBlur={handleMessage} className={checkMessage === "Message is required" ? "inactive" : "active"} required className="vertical" />

                  <button>Submit</button>
                  {done && "Thank you. Your email has been sent!"}
              </form>
          </div>
      </div>
  </div>
  );
};

export default Contact;
