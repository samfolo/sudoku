import React from 'react';
import Classes from './DifficultyButton.module.css';

const DifficultyButton = props => {
  const color = props.active ? '#21ffda' : null;
  const border = props.active ? '1px solid #21ffda' : null;
  const boxShadow = props.active ? '0 0 20px rgba(33, 255, 218, 0.585)' : null;

  return (
    <div 
      className={Classes.DifficultyButton}
      style={{ color, border, boxShadow }}
      data-test="component-difficulty-button"
      onClick={props.onClick}>
      {props.value}
    </div>
  )
}

export default DifficultyButton;
