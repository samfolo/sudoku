import React from 'react';
import Classes from './DifficultyButton.module.css';

const DifficultyButton = props => {
  return (
    <div 
      className={Classes.DifficultyButton} 
      data-test="component-difficulty-button"
      onClick={props.onClick}>
      {props.value}
    </div>
  )
}

export default DifficultyButton;
