/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { jsx, css } from '@emotion/core';

const aboutStyle = css`
  position: relative;
  width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
  background-color: #111;
`;

const aboutHeadingStyle = css`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const aboutTitleStyle = css`
  color: #ddd;
  margin: 0;
`;

const aboutBodyStyle = css`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const aboutBodyInfoStyle = css`
  height: 100%;
  flex-grow: 1;
  background-color: red;
`;

const aboutBodySkillsStyle = css`
  height: 100%;
  flex-grow: 1;
  background-color: lightblue;
  display: flex;
  flex-wrap: wrap;
`;

const skillStyle = css`
  flex-grow: 1;
  border: 1px solid black;
  height: 50%;
  width: 25%;
`;

const About = props => (
  <div css={aboutStyle}>
    <div css={aboutHeadingStyle}>
      <ScrollAnimation animateIn='fadeInRight' duration='1' delay='500' animateOnce={true}>
        <h1 css={aboutTitleStyle}>About Me</h1>
      </ScrollAnimation>
    </div>
    <div css={aboutBodyStyle}>
      <div css={aboutBodyInfoStyle}/>
      <div css={aboutBodySkillsStyle}>
        <div css={skillStyle}/>
        <div css={skillStyle}/>
        <div css={skillStyle}/>
        <div css={skillStyle}/>
        <div css={skillStyle}/>
        <div css={skillStyle}/>
        <div css={skillStyle}/>
        <div css={skillStyle}/>
      </div>
    </div>
  </div>
);

export default About;
