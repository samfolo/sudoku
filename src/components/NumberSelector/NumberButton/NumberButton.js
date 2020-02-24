import React from 'react';
import Classes from './NumberButton.module.css';

const NumberButton = props => {
  const backgroundColor = props.active ? '#21ffda' : null;
  const color = props.active ? '#1e1e1e' : '#21ffda';
  const boxShadow = props.active ? '0 0 20px #72ffe737' : null;
  const border = props.active ? '1px solid #636363' : null;

  return (
    <div 
      onClick={props.onClick} 
      className={Classes.NumberButton} 
      style={{ color, backgroundColor, boxShadow, border }} 
      data-test="component-number-button">
        <span className={Classes.Number}>{props.value}</span>
    </div>
  )
}

export default NumberButton;
