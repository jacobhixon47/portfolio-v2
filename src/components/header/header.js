import React from 'react';
import Button from '../button/button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.css';

const Header = (props) => (
  <div id='main-header' className={props.pageLoaded ? 'show-header' : ''}>
    <div id='header-overlay'>
      <div id='header-title' className={props.pageLoaded ? 'show-title' : ''}>
        <h4 style={{fontSize: '100px'}} className='title'>hello.</h4>
      </div>
    </div>
  </div>
);

export default Header;
