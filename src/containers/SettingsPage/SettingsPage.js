import React, { useState } from 'react';
import { Redirect } from 'react-router';

import Classes from './SettingsPage.module.css';
import DifficultyPicker from '../../components/DifficultyPicker/DifficultyPicker';
import Button from '../../components/UI/Button/Button';
import Title from '../../components/UI/Title/Title';

const SettingsPage = props => {
  const [currentDifficulty, setCurrentDifficulty] = useState('Medium');

  const handleDifficultyChange = difficulty => {
    setCurrentDifficulty(difficulty);
  }

  const handleClick = () => {
    props.playGame(currentDifficulty);
  }
  
  return (
    <div className={Classes.SettingsPage} data-test="component-settings-page">
        { props.inGame ? <Redirect to="/play" /> : null }
        <Title />
        <div className={Classes.Heading}>Choose a difficulty</div>
        <DifficultyPicker
          onChange={handleDifficultyChange}
          currentDifficulty={currentDifficulty}
          data-test="difficulty-picker" />
          
        <Button data-test={'play-button'} onClick={handleClick} text={'Play'} />
    </div>
  );
}

export default SettingsPage;
