import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Classes from './SudokuPage.module.css';

import Sudoku from '../../components/Sudoku/Sudoku';
import NumberSelector from '../../components/NumberSelector/NumberSelector';
import Button from '../../components/UI/Button/Button';

const SudokuPage = props => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [, setLastClicked] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const [isTemporaryFill, setIsTemporaryFill] = useState(false);
  
  const handleNumberSelection = number => {
    if (selectedNumber === number) {
      setSelectedNumber(0);
    } else {
      setSelectedNumber(number);
    }
  }

  const handleCellFilling = coord => {
    props.onClick(coord, selectedNumber);
    setLastClicked(coord);
  }
  
  const handleSolve = () => {
    props.showSolution();
    setIsSolved(true);
  }
  
  const handleCellClearing = coord => {
    props.onClear(coord, selectedNumber);
    setLastClicked(coord);
  }

  const handleClick = () => {
    setIsTemporaryFill(false);
    setLastClicked(null);
    setSelectedNumber(0);
    setIsSolved(false);
    props.onReplay();
  }

  const toggleTemporaryFill = () => setIsTemporaryFill(!isTemporaryFill);

  return (
    <div data-test="component-sudoku-page" className={Classes.SudokuPage}>
      { (props.inGame || props.test) ? null : <Redirect to="/" /> }
      <div className={Classes.Widget}>
        <Sudoku 
          data-test="sudoku" 
          diff={props.diff}
          model={props.model}
          isSolved={isSolved}
          fullBoard={props.fullBoard}
          selectedNumber={selectedNumber}
          isTemporaryFill={isTemporaryFill}
          onClear={handleCellClearing}
          onClick={handleCellFilling} />

        <NumberSelector 
          data-test="number-selector"
          selectedNumber={selectedNumber}
          onClick={handleNumberSelection} />

        <div className={Classes.Buttons}>
          <Button
            data-test="show-solution"
            text={'Solution'}
            height={'4vh'}
            borderRadius={'99rem'}
            onClick={handleSolve} />
          <Button 
            data-test="temporary-fill"
            backgroundClass={'Pencil'}
            width={'4vh'} height={'4vh'}
            backgroundColor={isTemporaryFill ? '#21ffda' : null}
            onClick={toggleTemporaryFill} />
          <Button 
            data-test="try-again"
            text={'Restart'}
            onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default SudokuPage;
