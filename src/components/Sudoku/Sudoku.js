import React from 'react';
import Classes from './Sudoku.module.css';

const Sudoku = props => {
  return (
    <div className={Classes.Sudoku} data-test="component-sudoku">
      <div data-test="row" />
      <div data-test="row" />
      <div data-test="row" />
      <div data-test="row" />
      <div data-test="row" />
      <div data-test="row" />
      <div data-test="row" />
      <div data-test="row" />
      <div data-test="row" />
    </div>
  );
}

export default Sudoku;
