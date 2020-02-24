import React, { useState } from 'react';
import Classes from './Button.module.css';

const Button = props => {
  const backgroundColor = props.backgroundColor;

  return (
    <div 
      className={[Classes[props.backgroundClass], Classes.Button].join(' ')}
      style={{ 
        backgroundColor, 
        width: props.width, 
        height: props.height,
        borderRadius: props.borderRadius, }}
      onClick={props.onClick}
      data-test="component-button">
        {props.text}
    </div>
  );
}

export default Button;
