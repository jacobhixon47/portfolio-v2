import React from 'react';
import './button.css';

const Button = props => {
  return (
    <div className='button' onMouseDown={props.handleMouseDown}>
      {props.children}
    </div>
  );
}

export default Button;
