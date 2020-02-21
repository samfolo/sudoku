import React from 'react';
import Classes from './NumberButton.module.css';

const NumberButton = props => {
  return (
    <div onClick={props.onClick} className={Classes.NumberButton} data-test="component-number-button">
      <span className={Classes.Number}>{props.value}</span>
    </div>
  )
}

export default NumberButton;
