import React, { useState } from 'react';
import Classes from './SudokuPage.module.css';

import Sudoku from '../../components/Sudoku/Sudoku';
import NumberSelector from '../../components/NumberSelector/NumberSelector';
import Button from '../../components/UI/Button/Button';

const SudokuPage = props => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [, setLastClicked] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  
  const handleNumberSelection = number => {
    if (selectedNumber === number) {
      setSelectedNumber(0);
    } else {
      setSelectedNumber(number);
    }
  }

  const handleCellFilling = coord => {
    props.onFill(coord, selectedNumber);
    setLastClicked(coord);
  }

  const handleSolve = () => {
    props.showSolution();
    setIsSolved(true);
  }

  return (
    <div data-test="component-sudoku-page" className={Classes.SudokuPage}>
      <Sudoku 
        data-test="sudoku" 
        model={props.model}
        isSolved={isSolved}
        onClick={handleCellFilling} />

      <NumberSelector 
        data-test="number-selector"
        selectedNumber={selectedNumber}
        onClick={handleNumberSelection} />

      <Button data-test="show-solution" text={'Show Solution'} onClick={handleSolve} />
    </div>
  );
}

export default SudokuPage;
