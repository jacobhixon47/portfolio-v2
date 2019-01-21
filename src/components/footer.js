/** @jsx jsx */

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { myFadeIn } from '../utils/animations';
import { jsx, css } from '@emotion/core';

const footerStyle = css`
  height: 30vh;
  width: 100vw;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 10%;
  animation: ${myFadeIn} 1s 1.5s both;
  border-bottom: 20px solid #ddd;
  & a p, & p {
    color: #111;
    margin: 0;
  }
  & a p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    & h3 {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    left: 0;
    margin: 0px 20px 0px 20px;
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
        <a href='https://github.com/jacobhixon47' target='_blank' rel='noopener'><p>Github</p></a>
        <a href='https://linkedin.com/in/jacobhixon/' target='_blank' rel='noopener'><p>LinkedIn</p></a>
      </div>
      <div css={footerColumnStyle} style={{justifyContent: 'space-around'}}>
        <h3 style={{color: '#4C92B4'}}>Contact</h3>
        <p>(615) 812-8684</p>
        <p>jacobhixon47@gmail.com</p>
      </div>
    </div>
    <a href='https://github.com/jacobhixon47/portfolio-v2' target='_blank' rel='noopener'><p style={{color: '#4C92B4'}}>{'View this site on Github'}</p></a>
  </div>
);

export default Footer;
