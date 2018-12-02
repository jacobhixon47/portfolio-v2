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
        <div id='nav-links'>
          <div className={props.navVisible ? 'nav-item show' : 'nav-item'}><h4>About</h4></div>
          <div className={props.navVisible ? 'nav-item show' : 'nav-item'}><h4>Projects</h4></div>
          <div className={props.navVisible ? 'nav-item show' : 'nav-item'}><h4>Contact</h4></div>
        </div>
        <Button handleMouseDown={props.handleMouseDown} style={{zIndex: '5', backgroundColor: '#ccc'}}>
          <MdMenu />
        </Button>
      </div>
    </div>
  );
}

export default Nav;
