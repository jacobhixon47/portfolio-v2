/** @jsx jsx */

import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaArrowDown } from 'react-icons/fa';
<<<<<<< HEAD
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// import img from '../images/jellyfish.png';
=======
import img from '../images/ocean.png';
>>>>>>> about-page
import { jsx, css, keyframes } from '@emotion/core';
import { myFadeInLeft, myFadeIn, myBounce } from '../utils/animations';

const headerStyle = css`
  width: calc(100vw - 120px);
  max-width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
  position: relative;
  margin: 0;
<<<<<<< HEAD
=======
  transition: all 1s;
  animation: ${myFadeIn} 1s .5s both;
  @media (max-width: 425px) {
    max-width: 100vw;
    width: 100vw;
    left: 0px;
  }
>>>>>>> about-page
`;

const headerOverlayStyle = css`
  position: absolute;
  width: calc(100vw - 120px);
  max-width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, rgba(50, 50, 50, 1) 5%, rgba(50, 50, 50, 0.2) 90%);
  @media (max-width: 425px) {
    max-width: 100vw;
    width: 100vw;
    left: 0px;
  }
`;

const headerContentStyle = css`
  transition-delay: 1s !important;
  transition: all 1.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${myFadeInLeft} 1s 1.5s both;
  flex-grow: 4;
  @media (max-width: 425px) {
    h4 {
      font-size: 2em;
    }
  }
`;

const headerTitleStyle = css`
  color: #ddd;
  padding: 10px 20px 10px 20px;
  white-space: nowrap;
  text-align: center;
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
    <Img fluid={props.headerImage.childImageSharp.fluid} />
    <div css={headerOverlayStyle}>
      <div css={headerContentStyle}>
        <h4 css={headerTitleStyle}>Hello, I'm Jacob.</h4>
      </div>
      <div css={scrollMsgStyle} onClick={props.handleClickHeaderScrollButton}>
        <h3>scroll</h3>
        <FaArrowDown />
      </div>
    </div>
  </div>
);

export default Header;
