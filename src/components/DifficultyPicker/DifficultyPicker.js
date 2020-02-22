import React, { useState } from 'react';
import Classes from './DifficultyPicker.module.css';

import DifficultyButton from './DifficultyButton/DifficultyButton';

const DifficultyPicker = props => {
  const [currentDifficulty, setCurrentDifficulty] = useState('Medium');

  const renderDifficultyButtons = () => {
    const difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];

    const difficultyButtons = difficulties.map((difficulty, i) => {
      return (
        <DifficultyButton 
          key={`${i}_difficultyButton`}
          active={difficulty === currentDifficulty}
          data-test={`${difficulty}-button`}
          value={difficulty} />
      );
    });

    return difficultyButtons;
  }

  return (
    <div className={Classes.DifficultyPicker} data-test="component-difficulty-picker">
      {renderDifficultyButtons()}
    </div>
  );
}

export default DifficultyPicker;
