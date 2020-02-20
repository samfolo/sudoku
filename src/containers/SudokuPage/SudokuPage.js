import React from 'react';
import Classes from './SudokuPage.module.css';
import Sudoku from '../../components/Sudoku/Sudoku';

const SudokuPage = props => {
  return (
    <div data-test="component-sudoku-page" className={Classes.SudokuPage}>
      <Sudoku data-test="sudoku" />
    </div>
  )
}

export default SudokuPage;
