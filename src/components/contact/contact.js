import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const Contact = (props) => (
  <div className='contact-section'>
    <div className='contact-panel'>
      <h3><MdMailOutline/></h3>
    </div>
    <div className='contact-panel'>
      <h3><a href='https://github.com/jacobhixon47' target='_blank'><FaGithub/></a></h3>
    </div>
    <div className='contact-panel'>
      <h3><a href='https://linkedin.com/in/jacobhixon/' target='_blank'><FaLinkedin/></a></h3>
    </div>
  </div>
)

export default Contact;
