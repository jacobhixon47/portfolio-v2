/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

const footerStyle = css`
  height: 30vh;
  width: 100vw;
  z-index: -100;
  position: fixed;
  top: 70vh;
  background-color: #00283B;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const Footer = props => (
  <div id='footer' css={footerStyle}>
    
  </div>
);

export default Footer;
