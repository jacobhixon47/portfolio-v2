import React from 'react';
import {MdMailOutline, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const Contact = (props) => (
  <div className='contact-section'>
    <div className='contact-panel no-link'>
      <h3 style={{ verticalAlign: 'middle'}}>(615) 812-8684<MdPhone style={{marginLeft: '10px'}}/></h3>
    </div>
    <div className='contact-panel no-link'>
      <h3>jacobhixon47@gmail.com<MdMailOutline style={{marginLeft: '10px'}}/></h3>
    </div>
    <div className='contact-panel'>
      <h3><a href='https://github.com/jacobhixon47'><FaGithub style={{color: '#ddd'}}/></a></h3>
    </div>
    <div className='contact-panel'>
      <h3><a href='https://linkedin.com/in/jacobhixon/'><FaLinkedin style={{color: '#ddd'}}/></a></h3>
    </div>
  </div>
)

export default Contact;
