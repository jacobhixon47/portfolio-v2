import React from 'react';
import { Link } from 'gatsby';
// import Button from '../button/button';
import './nav.css';

const Nav = (props) => {
  let visible = 'hide';

  if (props.navVisible) {
    visible = 'show';
  }

  return (
    <div id="nav"
        onMouseDown={props.handleMouseDown}
        className={visible}>
      <h2><Link to='/'>Home</Link></h2>
      <h2><Link to='/'>About</Link></h2>
      <h2><Link to='/'>Contact</Link></h2>
      <h2><Link to='/'>Search</Link></h2>
    </div>
  );
}

export default Nav;
