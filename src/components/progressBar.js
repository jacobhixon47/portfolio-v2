/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

const progressBarOuter = css`
  height: 40px;  /* Can be anything */
  width: 80%;
  position: relative;
  background: #AEB2B2;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  padding: 0px 5px 0px 0px;
  box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const progressBarInner = css`
  display: block;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #054658;
  text-align: left;
  vertical-align: middle;
`;

const progressBarName = css`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #ddd;
  padding: 5px 10px;
  display: inline-block;
  height: 100%;
  text-align: left;
  background-color: #295D6E;
`;

const percentageStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  float: right;
  margin: 0;
  height: 100%;
  color: #555;
`;

const ProgressBar = props => (
  <div css={progressBarOuter}>
    <p css={percentageStyle}>{props.percentage}%</p>
    <div css={progressBarInner} style={{width: `${props.percentage}%`}}>
      <div css={progressBarName}>
        <span>{props.skill}</span>
      </div>
    </div>
  </div>
);

export default ProgressBar;
