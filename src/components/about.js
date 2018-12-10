/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Row, Col } from 'react-material-responsive-grid';
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
  padding-top: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vw;
    left: 0px;
    padding-top: 20px;
  }
`;

const aboutContentStyle = css`
  position: relative;
  width: calc(100vw - 120px);
  height: 100%;
  background-color: #ddd;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 100vw;
      justify-content: flex-start;
      height: auto;
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
  <div css={aboutStyle}>
    <div css={aboutContentStyle}>
      <ScrollAnimation css={vertFlex} animateIn='fadeInUp' duration={1} animateOnce={true}>
        <h1>Story</h1>
        <p style={{textAlign: 'center', padding: '0px 20px'}}>I'm passionate about creating clean, responsive web experiences. I love working with new tools, and sharpening my UX chops.</p>
      </ScrollAnimation>
    </div>
    <div css={aboutContentStyle}>
      <ScrollAnimation css={vertFlex} animateIn='fadeInUp' duration={1} animateOnce={true}>
        <h1>Skills</h1>
        <ProgressBar skill='CSS' percentage='80' />
        <ProgressBar skill='HTML' percentage='90' />
        <ProgressBar skill='React' percentage='70' />
        <ProgressBar skill='Javascript' percentage='80' />
        <ProgressBar skill='NodeJS' percentage='70' />
        <ProgressBar skill='Angular' percentage='60' />
        <ProgressBar skill='UI/UX' percentage='50' />
      </ScrollAnimation>
    </div>
  </div>
);

export default About;
