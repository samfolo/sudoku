import React from 'react';
import Classes from './App.module.css';
import SudokuPage from '../SudokuPage/SudokuPage';

const App = () => {
  return (
    <div data-test="component-app" className={Classes.App}>
      <SudokuPage />
    </div>
  );
}

export default App;
