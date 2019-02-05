/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgressBar from './progressBar';
import { jsx, css } from '@emotion/core';

const aboutStyle = css`
  position: relative;
  width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
  background-color: #ddd;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: calc(100vw - 40px);
    left: 0;
    height: auto;
    min-height: calc(100vh - 60px);
    margin: 20px 20px 0px 20px;
    padding-top: 0px;
  }
  @media (min-width: 2000px) {
    height: calc(70vh - 60px);
    height: 35vh;
    align-items: flex-start;
  }
`;

const aboutContentStyle = css`
  padding: 20px 0px 20px 0px;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #bbb;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    height: auto;
    border-bottom: 20px solid #ddd;
    margin: 0 !important;
  }
`;

const vertFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 10% 0 10%;
  @media (min-height: 2000px) {
    padding: 0 25% 0 25%;
  }
`;


const About = props => (
  <div css={aboutStyle} id='about'>
    <div css={aboutContentStyle} style={{marginRight: '10px'}}>
      <ScrollAnimation css={vertFlex}
                      animateIn='fadeInUp'
                      duration={1}
                      animateOnce={true}
                      delay={window.innerWidth > 768 ? 2000 : 500}>
        <h1>Story</h1>
        <p style={{textAlign: 'center', padding: '0px 20px'}}>I'm passionate about creating clean, responsive web experiences, because creating a proper presence online is essential to almost any brand's success. I love working with new technologies, and sharpening my UX chops.</p>
        <p style={{textAlign: 'center', padding: '0px 20px'}}>In April of 2017, I graduated Epicodus (Portland campus) with a focus on full-stack development using Ruby on Rails and Javascript. These days, I've been putting a lot of focus on rounding out my web development skills and learning to work with new technologies, such as React, GatsbyJS, Wordpress, and more!</p>
      </ScrollAnimation>
    </div>
    <div css={aboutContentStyle} style={{marginLeft: '10px'}}>
      <ScrollAnimation css={vertFlex} animateIn='fadeInUp' duration={1} animateOnce={true} delay={window.innerWidth > 768 ? 2250 : 500}>
        <h1>Skills</h1>
          <h3>CSS</h3>
          <h3>HTML</h3>
          <h3>Javascript</h3>
          <h3>React</h3>
          <h3>Angular 2+</h3>
          <h3>NodeJS</h3>
          <h3>UI/UX</h3>
          <h3>Wordpress</h3>
      </ScrollAnimation>
    </div>
  </div>
);

export default About;
