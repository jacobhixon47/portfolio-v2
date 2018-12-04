/** @jsx jsx */

import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import img from '../images/jellyfish.png';
import { jsx, css, keyframes } from '@emotion/core';
import { myFadeInLeft, myFadeIn } from '../utils/animations';

const headerStyle = css`
  width: 100vw;
  max-width: 100vw;
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: right;
  margin: 0;
  height: 100vh;
  z-index: -1;
  transition: all 1s;
  animation: ${myFadeIn} 1s .5s both;
`;

const headerOverlayStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, rgba(50, 50, 50, 1) 5%, rgba(50, 50, 50, 0.2) 90%);
`;

const headerContentStyle = css`
  transition-delay: 1s !important;
  transition: all 1.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${myFadeInLeft} 1s 1.5s both;
`;

const headerTitleStyle = css`
  color: #ddd;
  width: 30vw;
  padding: 10px 20px 10px 20px;
  white-space: nowrap;
  background-color: rgba(150, 150, 150, 0.4);
  text-align: center;
  font-family: 'Pacifico', cursive;
  font-size: 100px;
`;

const Header = (props) => (
  <div css={headerStyle}>
    <div css={headerOverlayStyle}>
      <div css={headerContentStyle}>
        <h4 css={headerTitleStyle}>hello.</h4>
      </div>
    </div>
  </div>
);

export default Header;
