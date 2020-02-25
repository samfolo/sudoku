import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Classes from './App.module.css';

import SudokuPage from '../SudokuPage/SudokuPage';
import SudokuModel from '../../models/SudokuModel/SudokuModel';
import SettingsPage from '../SettingsPage/SettingsPage';

const App = () => {
  const [model, setModel] = useState(undefined);
  const [inGame, setInGame] = useState(false);
  const [fullBoard, setFullBoard] = useState(false);
  const [incorrectCoordinates, setIncorrectCoordinates] = useState([]);

  const handleCellClick = (coord, value) => {
    console.log(model.renderSolution()) // debugging
    value !== 0 ? model.fillCell(coord, value) : model.clearCell(coord);
    monitorGameProgress();
    setModel(model);
  }

  const monitorGameProgress = () => {
    setFullBoard(model.cellsLeft() === 0);
    setIncorrectCoordinates(model.getIncorrectCoordinates());
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

  const handleReplay = () => {
    setIncorrectCoordinates([]);
    setFullBoard(false);
    setModel(undefined);
    setInGame(false);
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
          fullBoard={fullBoard}
          onReplay={handleReplay}
          onClick={handleCellClick}
          onClear={handleCellClearing}
          showSolution={handleSolve}
          diff={incorrectCoordinates} />
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
