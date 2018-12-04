/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import { jsx, css } from '@emotion/core';

const aboutStyle = css`
  position: relative;
  width: calc(100vw - 120px);
  height: calc(100vh - 60px);
  left: 60px;
  background-color: #ddd;
  margin: 0;
`;

const aboutHeadingStyle = css`
  height: 30%;
`;

const aboutTitleStyle = css`
  color: #111;
  margin: 0;
`;

const aboutBodyStyle = css`
  height: 70%;
`;
//
// const aboutBodyInfoStyle = css`
//   height: 100%;
//   flex-grow: 1;
//   background-color: red;
// `;
//
// const aboutBodySkillsStyle = css`
//   height: 100%;
//   flex-grow: 1;
//   background-color: lightblue;
//   display: flex;
//   flex-wrap: wrap;
// `;
//
// const skillStyle = css`
//   flex-grow: 1;
//   border: 1px solid black;
//   height: 50%;
//   width: 25%;
// `;

const About = props => (
  <Grid css={aboutStyle}>
    <Row css={aboutHeadingStyle} center={['lg']} middle={['lg']}>
      <Col lg={12}>
        <ScrollAnimation animateIn='fadeInRight' duration='1' delay='500' animateOnce={true}>
          <h1 css={aboutTitleStyle}>About Me</h1>
        </ScrollAnimation>
      </Col>
    </Row>
    <Row css={aboutBodyStyle}>
      <Col lg={6}>
        <Row style={{height: '30%'}} center={['lg']} top={['lg']}>
          <ScrollAnimation animateIn='fadeInRight' duration='1' delay='1000' animateOnce={true}>
            <h2 css={aboutTitleStyle}>Story</h2>
          </ScrollAnimation>
        </Row>
      </Col>
      <Col lg={6}>
        <Row style={{height: '30%'}} center={['lg']} top={['lg']}>
          <ScrollAnimation animateIn='fadeInRight' duration='1' delay='1000' animateOnce={true}>
            <h2 css={aboutTitleStyle}>Skills</h2>
          </ScrollAnimation>
        </Row>
      </Col>
    </Row>
  </Grid>
);
// <div css={aboutBodyInfoStyle}/>
// <div css={aboutBodySkillsStyle}>
//   <div css={skillStyle}/>
//   <div css={skillStyle}/>
//   <div css={skillStyle}/>
//   <div css={skillStyle}/>
//   <div css={skillStyle}/>
//   <div css={skillStyle}/>
//   <div css={skillStyle}/>
//   <div css={skillStyle}/>
// </div>

export default About;
