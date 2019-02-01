/** @jsx jsx */

import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaArrowDown } from 'react-icons/fa';
import img from '../images/ocean.png';
import { jsx, css, keyframes } from '@emotion/core';
import { myFadeInLeft, myFadeIn, myBounce } from '../utils/animations';

const headerStyle = css`
  width: calc(100vw - 120px);
  max-width: calc(100vw - 120px);
  height: 40vh;
  left: 60px;
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: right;
  margin: 60px 0px 20px 0px;
  transition: all 1s;
  animation: ${myFadeIn} 1s .5s both;
  @media (max-width: 768px) {
    max-width: 100vw;
    width: calc(100vw - 40px);
    height: 45vh;
    left: 0;
    margin: 80px 20px 0 20px;
  }
`;

const headerOverlayStyle = css`
  width: calc(100vw - 120px);
  max-width: calc(100vw - 120px);
  height: 40vh;
  left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, rgba(50, 50, 50, 1) 5%, rgba(50, 50, 50, 0.2) 90%);
  @media (max-width: 768px) {
    max-width: 100vw;
    width: calc(100vw - 40px);
    height: 45vh;
    left: 0;
  }
`;

const headerContentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  @media (min-width: 1000px) {
    flex-grow: 4;
  }
`;

const headerTitleStyle = css`
  animation: ${myFadeInLeft} 1s 1.5s both;
  transition: all 1.5s;
  color: #ddd;
  padding: 10px 20px 10px 20px;
  white-space: nowrap;
  text-align: center;
  font-size: 100px;
  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const subHeaderStyle = css`
  animation: ${myFadeInLeft} 1s 1.5s both;
  transition: all 1.5s;
  color: #ddd;
  padding: 10px 20px 10px 20px;
  text-align: center;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
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
  @media (min-width: 1000px) {
    & h3:hover {
      cursor: pointer;
      animation: ${myBounce} 2s infinite;
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const scrollMsgContent = css`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = (props) => (
  <div css={headerStyle}>
    <div css={headerOverlayStyle}>
      <div css={headerContentStyle}>
        <h4 css={headerTitleStyle}>Hello, I'm Jacob.</h4>
        <h4 css={subHeaderStyle}>I want to help your online brand to stand out from the rest.</h4>
      </div>
    </div>
  </div>
);

export default Header;
