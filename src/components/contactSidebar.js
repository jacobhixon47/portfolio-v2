/** @jsx jsx */

import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { jsx, css } from '@emotion/core';
import { myFadeInUp } from '../utils/animations';

const contactSectionStyle = css`
  top: 25vh;
  position: fixed;
  width: 60px;
  height: 50vh;
  display: flex;
  transform: translateX(calc(100vw - 60px));
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
  div:nth-of-type(1) {
    animation: ${myFadeInUp} 1s 1.5s both;
  }
  div:nth-of-type(2) {
    animation: ${myFadeInUp} 1s 1.75s both;
  }
  div:nth-of-type(3) {
    animation: ${myFadeInUp} 1s 2s both;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const contactPanelStyle = css`
  text-align: center;
  padding: 15px;
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & h3 {
    margin: 0;
  }
  & h3 a {
    margin: 0;
    color: #111;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ContactSidebar = (props) => (
  <div css={contactSectionStyle}>
    <div css={contactPanelStyle}>
      <h3><a href='https://github.com/jacobhixon47' target='_blank' rel='noopener'><FaGithub/></a></h3>
    </div>
    <div css={contactPanelStyle}>
      <h3><a href='https://linkedin.com/in/jacobhixon/' target='_blank' rel='noopener'><FaLinkedin/></a></h3>
    </div>
  </div>
)

export default ContactSidebar;
