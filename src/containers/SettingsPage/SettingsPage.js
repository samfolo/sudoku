import React, { useState } from 'react';
import { Redirect } from 'react-router';

import Classes from './SettingsPage.module.css';
import DifficultyPicker from '../../components/DifficultyPicker/DifficultyPicker';
import Button from '../../components/UI/Button/Button';

const SettingsPage = props => {
  const [currentDifficulty, setCurrentDifficulty] = useState('Medium');

  const handleDifficultyChange = difficulty => {
    setCurrentDifficulty(difficulty);
  }

  const handleClick = () => {
    props.playGame(currentDifficulty);
  }
  
  return (
    <div className={Classes.DifficultyPicker} data-test="component-settings-page">
      { props.inGame ? <Redirect to="/play" /> : null }
      <div>Choose a difficulty</div>
      <DifficultyPicker
        onChange={handleDifficultyChange}
        currentDifficulty={currentDifficulty}
        data-test="difficulty-picker" />
        
      <Button data-test={'play-button'} onClick={handleClick} text={'Play'} />
    </div>
  );
}

export default SettingsPage;
