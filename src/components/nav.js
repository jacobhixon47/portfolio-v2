/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { MdMenu } from 'react-icons/md';
import NavButton from './navButton';
import { jsx, css } from '@emotion/core';
import { myFadeInLeft, myFadeIn, myFadeOut, mySlideInDown } from '../utils/animations';

const navStyle = css`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ddd;
  position: fixed;
  top: calc(100% - 75px);
  transition: all .5s;
  z-index: 100;
  position: fixed;
  top: 0;
`;

const navTitleStyle = css`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
  & h3 {
    color: #ddd;
    margin: 0;
  }
  animation: ${mySlideInDown} .5s 1s both;
`;

const navListStyle = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
  align-items: center;
`;

const navItemsShowStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  & div:nth-of-type(1) {
    animation: ${myFadeIn} .5s .4s both;
  }
  & div:nth-of-type(2) {
    animation: ${myFadeIn} .5s .2s both;
  }
  & div:nth-of-type(3) {
    animation: ${myFadeIn} .5s both;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const navItemsHideStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  & div:nth-of-type(1) {
    animation: ${myFadeOut} .5s .4s both;
  }
  & div:nth-of-type(2) {
    animation: ${myFadeOut} .5s .2s both;
  }
  & div:nth-of-type(3) {
    animation: ${myFadeOut} .5s both;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const navItemStyle = css`
  color: #555;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 60px;
  & h4 {
    margin: 0;
  }
  @media (min-width: 1000px) {
    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
      transition: all .5s;
    }
  }
`;

const iconStyle = css`
  color: #555;
`;

const Nav = (props) => {
  return (
    <div css={navStyle}>
      <div css={navTitleStyle}><h3>JH</h3></div>
      <div css={navListStyle}>
        <div css={props.navVisible ? navItemsShowStyle : navItemsHideStyle}>
          <div css={navItemStyle}><h4>About</h4></div>
          <div css={navItemStyle}><h4>Projects</h4></div>
          <div css={navItemStyle}><h4>Contact</h4></div>
        </div>
      </div>
      <NavButton handleMouseDown={props.handleMouseDown}>
        <MdMenu css={iconStyle}/>
      </NavButton>
    </div>
  );
}

export default Nav;
