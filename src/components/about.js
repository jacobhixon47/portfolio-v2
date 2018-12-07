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
`;

const aboutHeadingStyle = css`
  height: 30%;
`;

const aboutTitleStyle = css`
  color: #111;
  margin: 0;
`;

const aboutBodyStyle = css`
  position: relative;
  width: calc(100vw - 120px);
  height: 70%;
  background-color: #ddd;
  margin: 0;
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
    <Row style={{height: '30%'}} center={['lg']} middle={['lg']}>
    </Row>
    <Row css={aboutBodyStyle}>
      <Col lg={6} />
      <Col lg={6}>
        <ScrollAnimation animateIn='fadeInRight' duration={1} delay={750} animateOnce={true}>
          <Row center={['lg', 'md', 'sm']} middle={['lg', 'md', 'sm']}>
            <ProgressBar skill='CSS' percentage='80' />
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' duration={1} delay={850} animateOnce={true}>
          <Row center={['lg', 'md', 'sm']} middle={['lg', 'md', 'sm']}>
            <ProgressBar skill='HTML' percentage='90' />
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' duration={1} delay={950} animateOnce={true}>
          <Row center={['lg', 'md', 'sm']} middle={['lg', 'md', 'sm']}>
            <ProgressBar skill='Javascript' percentage='80' />
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' duration={1} delay={1050} animateOnce={true}>
          <Row center={['lg', 'md', 'sm']} middle={['lg', 'md', 'sm']}>
            <ProgressBar skill='React' percentage='70' />
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' duration={1} delay={1150} animateOnce={true}>
          <Row center={['lg', 'md', 'sm']} middle={['lg', 'md', 'sm']}>
            <ProgressBar skill='NodeJS' percentage='70' />
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' duration={1} delay={1250} animateOnce={true}>
          <Row center={['lg', 'md', 'sm']} middle={['lg', 'md', 'sm']}>
            <ProgressBar skill='AngularJS/2/4' percentage='70' />
          </Row>
        </ScrollAnimation>
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
