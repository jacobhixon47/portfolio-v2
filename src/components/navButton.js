/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
// import './button.css';

const buttonStyle = css`
  margin: 0;
  width: 60px;
  height: 60px;
  outline: none;
  transition: all .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  font-size: 1.5em;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  & svg {
    color: #555;
  }
  @media (min-width: 1000px) {
    &:hover {
      cursor: pointer;
      background-color: #ccc;
      transition: all .75s;
    }
    &:hover svg {
      transition: all .75s;
      color: #111;
    }
  }
`;

const NavButton = (props) => (
  <div css={buttonStyle} onMouseDown={props.handleMouseDown}>
    {props.children}
  </div>
);

export default NavButton;
