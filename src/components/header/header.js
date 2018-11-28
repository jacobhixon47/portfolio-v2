import React from 'react';
import Button from '../button/button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.css';

const Header = (props) => (
  <div id='main-header'>
    <div id='main-title' className={props.headerAnimated ? 'title-slide-right' : ''}>
      <h1 style={{fontSize: '100px'}}>HELLO.</h1>
    </div>
    <div id='header-subtitle' className={props.headerAnimated ? 'show' : ''}>
      <div style={{borderLeft: '2px solid #ddd', paddingLeft: '10px'}}>
        <h2 id='header-sub-h2' className={props.headerAnimated ? 'show' : ''}>My name is Jacob</h2>
        <h3 id='header-sub-h3' className={props.headerAnimated ? 'show' : ''}>I am a web enthusiast.</h3>
      </div>
    </div>
    <div id='scroll-msg' className={props.headerAnimated ? 'slide-left' : ''}>
      <p style={{margin: '0'}}><i>scroll</i></p>
      <MdKeyboardArrowDown />
    </div>
  </div>
);

export default Header;
