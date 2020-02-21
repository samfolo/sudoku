import React from 'react';
import Classes from './NumberButton.module.css';

const NumberButton = props => {
  return (
    <div data-test="component-number-button">
      {props.value}
    </div>
  )
}

export default NumberButton;
