import React, { useState } from 'react';
import Classes from './NumberButton.module.css';

const NumberButton = props => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleIsClicked = () => {
    props.onClick();
    setIsClicked(!isClicked);
  }

  return (
    <div onClick={toggleIsClicked} className={Classes.NumberButton} data-test="component-number-button">
      <span className={Classes.Number}>{props.value}</span>
    </div>
  )
}

export default NumberButton;
