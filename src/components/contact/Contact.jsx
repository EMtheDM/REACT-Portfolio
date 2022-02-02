import React, { useState } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
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
                  <input className="input-name" type="text" placeholder="Name" name="user_name" />
                  <input className="input-subject" type="text" placeholder="Subject" name="user_subject" />
                  <input className="input-email" type="text" placeholder="Email" name="user_email" />
                  <textarea className="vertical" rows="5" placeholder="Message" name="message"/>
                  <button>Submit</button>
                  {done && "Thank you..."}
              </form>
          </div>
      </div>
  </div>
  );
};

export default Contact;
