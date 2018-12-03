import React from 'react';
import Button from '../button/button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.css';

const Header = (props) => (
  <div id='main-header' className={props.pageLoaded ? 'show-header' : ''}>
    <div id='header-overlay'>
      <div id='header-title' className={props.pageLoaded ? 'show-title' : ''}>
        <p style={{fontSize: '100px'}} className='title'>hello.</p>
        <p style={{fontSize: '30px'}} className={props.pageLoaded ? 'show-subtitle-1' : 'subtitle'}>My name is Jacob.</p>
        <p style={{fontSize: '20px'}} className={props.pageLoaded ? 'show-subtitle-2' : 'subtitle'}>I enjoy creating experiences.</p>

      </div>
    </div>
  </div>
);

export default Header;
