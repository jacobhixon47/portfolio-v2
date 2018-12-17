/** @jsx jsx */

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {jsx, css} from '@emotion/core';

const projectsStyle = css`
  position: relative;
  width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
  background-color: #111;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 30vh;
  color: #ddd;
  & h1 {
    color: #ddd;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100vw;
    left: 0px;
    padding-top: 20px;
    margin-bottom: 0;
  }
`;

const projectsTitleStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Projects = props => (
  <div id='projects' css={projectsStyle}>
    <ScrollAnimation css={projectsTitleStyle} animateIn='fadeInUp' duration={1} animateOnce={true}>
      <h1>Projects</h1>
    </ScrollAnimation>
    <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true}>
    <p style={{textAlign: 'center', padding: '0px 20px'}}>This section is under maintenance. Check back soon!</p>
    </ScrollAnimation>
  </div>
);

export default Projects;
