import React from 'react';
import Classes from './DifficultyPicker.module.css';

import DifficultyButton from './DifficultyButton/DifficultyButton';

const DifficultyPicker = props => {
  return (
    <div className={Classes.DifficultyPicker} data-test="component-difficulty-picker">
      <DifficultyButton data-test="easy-button" />
      <DifficultyButton data-test="medium-button" />
      <DifficultyButton data-test="hard-button" />
      <DifficultyButton data-test="expert-button" />
    </div>
  );
}

export default DifficultyPicker;
