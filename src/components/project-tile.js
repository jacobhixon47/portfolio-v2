/** @jsx jsx */

import React from 'react';
import {jsx, css} from '@emotion/core';
import { FaGithub, FaShareSquare } from 'react-icons/fa';

const projectTileStyle = css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
  div > p {
    margin: 0;
  }
  @media (min-width: 1000px) {
    &:hover > .overlay {
      transform: translateY(0);
      transition: all .5s;
    }
  }
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: 100vh;
    left: 0px;
    margin: 0;
    border-bottom: 20px solid #ddd;
    &:hover > .overlay {
      transform: translateY(0px);
      transition: all .5s;
    }
  }
`;

const overlayStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all .5s;
  padding: 20px;
  h2, h3 {
    color: #ddd;
  }
  @media (max-width: 768px) {
    height: 100%;
    &:hover {
      opacity: 1;
      transition: all .5s;
    }
  }
`;

const linkIconStyle = css`
  color: #ddd;
  margin: 20px;
  &:hover {
    color: #aaa;
  }
`;

const ProjectTile = props => (
  <div className='project-tile'
        css={projectTileStyle}
        style={{backgroundImage: `url(${props.image})`}}
  >
    <div css={overlayStyle} className='overlay'>
      <h2><strong>{props.title}</strong></h2>
      <div style={{textAlign: 'center'}}>
        <h3>{props.description}</h3>
        <p><i>{props.tools}</i></p>
        <h1>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <a href={props.live} target='__blank'><FaShareSquare css={linkIconStyle} /></a>
            <a href={props.github} target='__blank'><FaGithub css={linkIconStyle} /></a>
          </span>
        </h1>
      </div>
    </div>
  </div>
);

export default ProjectTile;
