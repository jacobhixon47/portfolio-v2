import React from 'react';
import { Link } from 'gatsby';
// import Button from '../button/button';
import './nav.css';

const Nav = (props) => {
  return (
    <div id="nav"
        onMouseDown={props.handleMouseDown}
        className={props.navVisible ? 'show' : 'hide'}
        style={{color: '#ddd'}}>
      <h2>Phone: +1 (615) 812-8684</h2>
      <h2>Email: jacobhixon47@gmail.com</h2>
      <h2>Github: <a href='https://linkedin.com/in/jacobhixon/'
                      style={{color: '#ddd'}}>jacobhixon47</a></h2>
      <h2>LinkedIn: <a href='https://linkedin.com/in/jacobhixon/'
                      style={{color: '#ddd'}}>Jacob Hixon</a></h2>
    </div>
  );
}

export default Nav;
