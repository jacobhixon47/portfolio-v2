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
  background-color: #bbb;
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
`;

const aboutContentStyle = css`
  padding: 20px 0px 0px 0px;
  position: relative;
  width: calc(100vw - 120px);
  height: 100%;
  background-color: #bbb;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    justify-content: flex-start;
    height: auto;
    border-bottom: 20px solid #ddd;
  }
`;

const vertFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;


const About = props => (
  <div css={aboutStyle} id='about'>
    <div css={aboutContentStyle} style={{borderRight: '10px solid #ddd'}}>
      <ScrollAnimation css={vertFlex}
                      animateIn='fadeInUp'
                      duration={1}
                      animateOnce={true}>
        <h1>Story</h1>
        <p style={{textAlign: 'center', padding: '0px 20px'}}>I'm passionate about creating clean, responsive web experiences. I love working with new tools, and sharpening my UX chops.</p>
        <p style={{textAlign: 'center', padding: '0px 20px'}}>In April of 2017, I graduated Epicodus (Portland campus) with a focus on full-stack development using Ruby on Rails and Javascript. These days, I've been putting a lot of focus on rounding out my web development skills and learning to work with new technologies, such as React, GatsbyJS, Wordpress, and more!</p>
      </ScrollAnimation>
    </div>
    <div css={aboutContentStyle} style={{borderLeft: '10px solid #ddd'}}>
      <ScrollAnimation css={vertFlex} animateIn='fadeInUp' duration={1} animateOnce={true}>
        <h1>Skills</h1>
        <ProgressBar skill='CSS' percentage='80' />
        <ProgressBar skill='HTML' percentage='90' />
        <ProgressBar skill='Javascript' percentage='80' />
        <ProgressBar skill='React' percentage='70' />
        <ProgressBar skill='Angular' percentage='60' />
        <ProgressBar skill='NodeJS' percentage='70' />
        <ProgressBar skill='UI/UX' percentage='60' />
        <ProgressBar skill='Wordpress' percentage='50' />
      </ScrollAnimation>
    </div>
  </div>
);

export default About;
