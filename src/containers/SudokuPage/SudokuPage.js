import React from 'react';
import Classes from './SudokuPage.module.css';

const SudokuPage = props => {
  return (
    <div data-test="component-sudoku-page" className={Classes.SudokuPage}>
      <div data-test="sudoku" />
    </div>
  )
}

export default SudokuPage;
