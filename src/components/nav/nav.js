import React from 'react';
import { Link } from 'gatsby';
import { MdMenu } from 'react-icons/md';
import Button from '../button/button';
import './nav.css';

const Nav = (props) => {
  return (
    <div id='nav'>
      <div id='nav-title'><h3>JH</h3></div>
      <div id='nav-list'>
        <div className='nav-item'><h4>About</h4></div>
        <div className='nav-item'><h4>Projects</h4></div>
        <div className='nav-item'><h4>Contact</h4></div>
        <div className='nav-item'><h4>About</h4></div>
        <Button onMouseDown={props.handleMouseDown}>
          <MdMenu />
        </Button>
      </div>
    </div>
  );
}

export default Nav;
