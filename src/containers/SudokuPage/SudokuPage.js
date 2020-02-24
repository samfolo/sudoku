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

  const handleClick = () => props.onReplay();

  const toggleTemporaryFill = () => setIsTemporaryFill(!isTemporaryFill);

  let tryAgain;
  if (props.fullBoard) tryAgain = (
    <Button 
      data-test="try-again"
      text={'Try again?'}
      onClick={handleClick} />
  );

  return (
    <div data-test="component-sudoku-page" className={Classes.SudokuPage}>
      { (props.inGame || props.test) ? null : <Redirect to="/" /> }
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

      {tryAgain}

      <div className={Classes.Buttons}>
        <Button
          data-test="show-solution"
          text={'Show Solution'}
          onClick={handleSolve} />
        <Button 
          data-test="temporary-fill"
          width={'1em'}
          height={'1em'}
          backgroundClass={'Pencil'}
          backgroundColor={isTemporaryFill ? 'aliceblue' : null}
          onClick={toggleTemporaryFill} />
      </div>
    </div>
  );
}

export default SudokuPage;
