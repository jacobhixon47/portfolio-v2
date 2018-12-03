import React from 'react';
import Button from '../button/button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.css';

const Header = (props) => (
  <div id='main-header' className={props.pageLoaded ? 'show-header' : ''}>
    <div id='header-overlay'>
      <div id='header-title' className={props.pageLoaded ? 'show-title' : ''}>
        <p style={{fontSize: '100px', color: '#ddd'}}>hello.</p>
      </div>
    </div>
  </div>
);

export default Header;
