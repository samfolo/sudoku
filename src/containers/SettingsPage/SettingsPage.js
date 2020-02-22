import React, { useState } from 'react';
import Classes from './SettingsPage.module.css';
import DifficultyPicker from '../../components/DifficultyPicker/DifficultyPicker';
import Button from '../../components/UI/Button/Button';
import { Redirect } from 'react-router';

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
      <DifficultyPicker
        onChange={handleDifficultyChange}
        currentDifficulty={currentDifficulty}
        data-test="difficulty-picker" />
        
      <Button data-test={'play-button'} onClick={handleClick} text={'Play'} />
    </div>
  );
}

export default SettingsPage;
