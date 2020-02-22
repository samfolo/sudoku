import React from 'react';
import Classes from './DifficultyPicker.module.css';

import DifficultyButton from './DifficultyButton/DifficultyButton';

const DifficultyPicker = props => {
  const renderDifficultyButtons = () => {
    const difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];

    const difficultyButtons = difficulties.map((difficulty, i) => {
      return (
        <DifficultyButton 
          key={`${i}_difficultyButton`}
          active={difficulty === props.currentDifficulty}
          data-test={`${difficulty}-button`}
          onClick={() => { props.onChange(difficulty); }}
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
