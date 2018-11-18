import React from 'react';
import Button from '../button/button';
import { MdMenu } from 'react-icons/md';
import './header.css';

const Header = props => (
  <div id='main-header'>
  <Button handleMouseDown={props.handleMouseDown}>
    <MdMenu />
  </Button>
    <p className='web-title'>Jacob Hixon</p>
  </div>
)

export default Header
