import React from 'react';
import Button from '../button/button';
import { MdMenu, MdKeyboardArrowDown } from 'react-icons/md';
import './header.css';

const Header = props => (
  <div id='main-header' className='fixed'>
    <Button handleMouseDown={props.handleMouseDown} style={{zIndex: '999'}}>
      <MdMenu style={{color: '#ddd', width: '1.5em', height: '1.5em'}}/>
    </Button>
    <div id='main-title'>
      <h1 style={{fontSize: '100px'}}>HELLO.</h1>
    </div>
    <div id='header-subtitle'>
      <div style={{borderLeft: '2px solid #ddd', paddingLeft: '10px'}}>
        <h2 id='header-sub-h2'>My name is Jacob</h2>
        <h3 id='header-sub-h3'>I am a web enthusiast.</h3>
      </div>
    </div>
    <div id='scroll-msg'>
      <p style={{margin: '0'}}><i>scroll</i></p>
      <MdKeyboardArrowDown />
    </div>
  </div>
)

export default Header
