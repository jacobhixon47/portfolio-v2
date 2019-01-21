/** @jsx jsx */

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectTile from './project-tile';
import NMSImage from '../images/nmsnaming.png';
import TeamGoImage from '../images/teamgo.png';
import {jsx, css} from '@emotion/core';


const projectsStyle = css`
  position: relative;
  width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
  background-color: #bbb;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  color: #111;
  overflow: hidden;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: calc(100vw - 40px);
    margin: 0px 20px 0px 20px;
    left: 0px;
    height: auto;
    padding-top: 20px;
  }
`;

const projectsTitleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  & h1 {
    margin: 0;
  }
  @media (max-width: 768px) {
    border-bottom: 20px solid #ddd;
  }
`;

const projectsListStyle = css`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const projectTileStyle = css`
  flex-basis: 0;
  flex-grow: 1;
  height: 95%;
`;

const Projects = props => (
  <div id='projects' css={projectsStyle}>
    <ScrollAnimation css={projectsTitleStyle} animateIn='fadeInUp' duration={1} animateOnce={true}>
      <h1>Projects</h1>
    </ScrollAnimation>
    <div css={projectsListStyle}>
      <ScrollAnimation css={projectTileStyle} animateIn='fadeIn' duration={1} delay={250} animateOnce={true}>
        <ProjectTile image={NMSImage}
                      title='NMS Name Gen'
                      description="A Progressive Web App tool to create star system names for No Man's Sky."
                      tools='Javascript, GatsbyJS'
                      live='https://nmsnaming.surge.sh'
                      github='https://github.com/jacobhixon47/nms-name-gen/'/>
      </ScrollAnimation>
      <ScrollAnimation css={projectTileStyle} animateIn='fadeIn' duration={1} animateOnce={true} delay={750}>
        <ProjectTile image={TeamGoImage}
                      title='TeamGo'
                      description='A simple chatroom web app for groups/teams.'
                      tools='Ruby on Rails'
                      live='https://teamgo.herokuapp.com'
                      github='https://github.com/jacobhixon47/teamgo/'/>
      </ScrollAnimation>
      <ScrollAnimation css={projectTileStyle} animateIn='fadeIn' duration={1} animateOnce={true} delay={1250}>
        <ProjectTile image={TeamGoImage}
                      title='TeamGo'
                      description='A simple chatroom web app for groups/teams.'
                      tools='Ruby on Rails'
                      live='https://teamgo.herokuapp.com'
                      github='https://github.com/jacobhixon47/teamgo/'/>
      </ScrollAnimation>
    </div>
  </div>
);

export default Projects;
