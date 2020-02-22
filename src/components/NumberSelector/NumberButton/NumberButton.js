import React from 'react';
import Classes from './NumberButton.module.css';

const NumberButton = props => {
  const backgroundColor = props.active ? 'aliceblue' : 'transparent';

  return (
    <div 
      onClick={props.onClick} 
      className={Classes.NumberButton} 
      style={{ backgroundColor }} 
      data-test="component-number-button">
        <span className={Classes.Number}>{props.value}</span>
    </div>
  )
}

export default NumberButton;
