import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Classes from './App.module.css';

import SudokuPage from '../SudokuPage/SudokuPage';
import SudokuModel from '../../models/SudokuModel/SudokuModel';
import SettingsPage from '../SettingsPage/SettingsPage';

const sudokuModel = new SudokuModel();
sudokuModel.generateGrid();
sudokuModel.generatePartial('easy');

const App = () => {
  const [model, setModel] = useState(sudokuModel);

  const handleCellClick = (coord, value) => {
    value !== 0 ? model.fillCell(coord, value) : model.clearCell(coord);
    setModel(sudokuModel);
  }

  const handleSolve = () => {
    model.fillPartial();
    setModel(sudokuModel);
  };
  
  const handleCellClearing = coord => {
    model.clearCell(coord);
    setModel(sudokuModel);
  }

  return (
    <div data-test="component-app" className={Classes.App}>
      <Switch>
        <Route path="/" exact render={() => (
          <SettingsPage />
        )} />
        <Route path="/play" render={() => (
          <SudokuPage 
            model={model} 
            onClick={handleCellClick}
            onClear={handleCellClearing}
            showSolution={handleSolve} />
        )} />
        <Redirect to='/' />
      </Switch>
      
    </div>
  );
}

export default App;
