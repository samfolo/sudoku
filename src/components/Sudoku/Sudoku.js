import React from 'react';
import Classes from './Sudoku.module.css';

const Sudoku = props => {
  return (
    <div className={Classes.Sudoku} data-test="component-sudoku" />
  );
}

export default Sudoku;
