import React from 'react';
import Button from '../button/button';
import { MdMenu } from 'react-icons/md';
import './header.css';

const Header = props => (
  <div id='main-header' className='fixed'>
    <Button handleMouseDown={props.handleMouseDown} style={{zIndex: '999'}}>
      <MdMenu />
    </Button>
    <div id='main-title'>
      {props.children}
    </div>
  </div>
)

export default Header
