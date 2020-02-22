import React from 'react';
import Classes from './SettingsPage.module.css';
import DifficultyPicker from '../../components/DifficultyPicker/DifficultyPicker';

const SettingsPage = props => {
  return (
    <div className={Classes.DifficultyPicker} data-test="component-settings-page">
      <DifficultyPicker data-test="difficulty-picker" />
    </div>
  );
}

export default SettingsPage;
