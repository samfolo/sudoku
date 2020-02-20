import React from 'react';
import Classes from './Sudoku.module.css';

import Row from '../Row/Row';

const Sudoku = props => {
  return (
    <div className={Classes.Sudoku} data-test="component-sudoku">
      <Row data-test="row" />
      <Row data-test="row" />
      <Row data-test="row" />
      <Row data-test="row" />
      <Row data-test="row" />
      <Row data-test="row" />
      <Row data-test="row" />
      <Row data-test="row" />
      <Row data-test="row" />
    </div>
  );
}

export default Sudoku;
