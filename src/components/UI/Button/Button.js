import React from 'react';
import Classes from './Button.module.css';

const Button = props => {
  return (
    <div 
      className={Classes.Button}
      onClick={props.onClick} 
      data-test="component-button">
        {props.text}
    </div>
  );
}

export default Button;
