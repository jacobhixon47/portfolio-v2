/** @jsx jsx */

import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaArrowDown } from 'react-icons/fa';
import img from '../images/jellyfish.png';
import { jsx, css, keyframes } from '@emotion/core';
import { myFadeInLeft, myFadeIn, myBounce } from '../utils/animations';

const headerStyle = css`
  width: calc(100vw - 120px);
  max-width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: right;
  margin: 0;
  transition: all 1s;
  animation: ${myFadeIn} 1s .5s both;
`;

const headerOverlayStyle = css`
  width: calc(100vw - 120px);
  max-width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
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
  justify-content: center;
  align-items: center;
  animation: ${myFadeInLeft} 1s 1.5s both;
  flex-grow: 4;
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

const scrollMsgStyle = css`
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: .5;
  & h3 {
    color: #ddd;
    margin: 0;
  }
  & h3:hover {
    cursor: pointer;
    animation: ${myBounce} 2s infinite;
  }
`;

const Header = (props) => (
  <div css={headerStyle}>
    <div css={headerOverlayStyle}>
      <div css={headerContentStyle}>
        <h4 css={headerTitleStyle}>hello.</h4>
      </div>
      <div css={scrollMsgStyle} onClick={props.handleClickHeaderScrollButton}>
        <h3>scroll</h3>
        <FaArrowDown />
      </div>
    </div>
  </div>
);

export default Header;
