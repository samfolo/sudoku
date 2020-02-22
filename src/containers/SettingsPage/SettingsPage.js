import React, { useState } from 'react';
import Classes from './SettingsPage.module.css';
import DifficultyPicker from '../../components/DifficultyPicker/DifficultyPicker';
import Button from '../../components/UI/Button/Button';

const SettingsPage = props => {
  const [currentDifficulty, setCurrentDifficulty] = useState('Medium');

  const handleDifficultyChange = difficulty => {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div className={Classes.DifficultyPicker} data-test="component-settings-page">
      <DifficultyPicker
        onChange={handleDifficultyChange}
        currentDifficulty={currentDifficulty}
        data-test="difficulty-picker" />
      <Button data-test={'play-button'} text={'Play'} />
    </div>
  );
}

export default SettingsPage;
