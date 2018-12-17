/** @jsx jsx */

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { jsx, css } from '@emotion/core';

const footerStyle = css`
  overflow: auto;
  height: 150px;
  width: 100vw;
  z-index: -100;
  position: fixed;
  top: calc(100vh - 150px);
  background-color: #00283B;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 10%;
  & a p, & p {
    color: #ddd;
    margin: 0;
  }
  & a p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 30vh;
    top: 70vh;
  }
  & h3 {
    color: #4C92B4;
    margin-bottom: 10px;
  }
`;

const mainFooterContentStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const footerColumnStyle = css`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & a p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Footer = props => (
  <div id='footer' css={footerStyle}>
    <div css={mainFooterContentStyle}>
      <div css={footerColumnStyle}>
        <h3 style={{color: '#4C92B4'}}>Social</h3>
        <a href='https://github.com/jacobhixon47' target='_blank'><p>Github</p></a>
        <a href='https://linkedin.com/in/jacobhixon/' target='_blank'><p>LinkedIn</p></a>
      </div>
      <div css={footerColumnStyle} style={{justifyContent: 'space-around'}}>
        <h3 style={{color: '#4C92B4'}}>Contact</h3>
        <p>(615) 812-8684</p>
        <p>jacobhixon47@gmail.com</p>
      </div>
    </div>
    <a href='https://github.com/jacobhixon47/portfolio-v2' target='_blank'><p style={{color: '#4C92B4'}}>{'View this site on Github'}</p></a>
  </div>
);

export default Footer;
