import React, { useState } from 'react';
import Classes from './SudokuPage.module.css';

import Sudoku from '../../components/Sudoku/Sudoku';
import SudokuModel from '../../models/SudokuModel/SudokuModel';


const SudokuPage = props => {
  const sudokuModel = new SudokuModel();
  const [model, setModel] = useState(new SudokuModel);

  model.generateGrid();
  model.generatePartial('easy');

  return (
    <div data-test="component-sudoku-page" className={Classes.SudokuPage}>
      <Sudoku model={model} data-test="sudoku" />
      <div data-test="number-selector" />
    </div>
  );
}

export default SudokuPage;
