import React from 'react';
import './button.css';

const Button = props => (
  <div className='button' onMouseDown={props.handleMouseDown}>
    {props.children}
  </div>
);

export default Button;
