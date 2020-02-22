import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Classes from './App.module.css';

import SudokuPage from '../SudokuPage/SudokuPage';
import SudokuModel from '../../models/SudokuModel/SudokuModel';
import SettingsPage from '../SettingsPage/SettingsPage';

const App = () => {
  const [model, setModel] = useState(undefined);
  const [inGame, setInGame] = useState(false);

  const handleCellClick = (coord, value) => {
    value !== 0 ? model.fillCell(coord, value) : model.clearCell(coord);
    setModel(model);
  }

  const handleSolve = () => {
    model.fillPartial();
    setModel(model);
  };
  
  const handleCellClearing = coord => {
    model.clearCell(coord);
    setModel(model);
  }

  const handleSetup = difficulty => {
    const sudokuModel = new SudokuModel();
    sudokuModel.generateGrid();
    sudokuModel.generatePartial(difficulty);
    setModel(sudokuModel);
    setInGame(true);
  }

  let routes = (
    <Switch>
      <Route path="/" exact render={() => (
        <SettingsPage
          inGame={inGame}
          playGame={handleSetup}
        />
      )} />
      <Route path="/play" exact render={() => (
        <SudokuPage 
          model={model}
          inGame={inGame}
          onClick={handleCellClick}
          onClear={handleCellClearing}
          showSolution={handleSolve} />
      )} />
      <Redirect to='/' />
    </Switch>
  );

  if (!model) routes = (
    <Switch>
      <Route path="/" exact render={() => (
        <SettingsPage
          inGame={inGame}
          playGame={handleSetup}
        />
      )} />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <div data-test="component-app" className={Classes.App}>
      {routes}
    </div>
  );
}

export default App;
