import React, { useState } from 'react';
import Classes from './Sudoku.module.css';

import SudokuModel from '../../models/SudokuModel/SudokuModel';
import Row from '../Row/Row';

const Sudoku = props => {
  const renderRows = () => {
    const values = props.model.renderPartial();
    const rows = values.map((row, index) => {
      return (
        <Row 
          key={`${index}_row`}
          id={`${index}_row`}
          yCoord={index}
          values={row}
          data-test="row" />
      )
    });
    return rows;
  }

  return (
    <div className={Classes.Sudoku} data-test="component-sudoku">
      {renderRows()}
    </div>
  );
}

export default Sudoku;
