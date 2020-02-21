import React, { useState } from 'react';
import Classes from './SudokuPage.module.css';

import Sudoku from '../../components/Sudoku/Sudoku';
import NumberSelector from '../../components/NumberSelector/NumberSelector';

const SudokuPage = props => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [, setLastClicked] = useState(null);
  
  const handleNumberSelection = number => {
    setSelectedNumber(number);
  }

  const handleCellFilling = coord => {
    props.onFill(coord, selectedNumber);
    setLastClicked(coord);
  }

  return (
    <div data-test="component-sudoku-page" className={Classes.SudokuPage}>
      <Sudoku data-test="sudoku" model={props.model} onClick={handleCellFilling} />
      <NumberSelector data-test="number-selector" onClick={handleNumberSelection} />
    </div>
  );
}

export default SudokuPage;
