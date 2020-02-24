import React from 'react';
import Classes from './Sudoku.module.css';
import Row from '../Row/Row';

const Sudoku = props => {
  const handleClick = coord => {
    props.onClick(coord);
  }

  const renderRows = () => {
    const values = props.model.renderPartial();
    const rows = values.map((row, index) => {
      return (
        <Row 
          key={`${index}_row`}
          id={`${index}_row`}
          values={row}
          yCoord={index}
          diff={props.diff}
          onClick={handleClick}
          onClear={props.onClear}
          isSolved={props.isSolved}
          fullBoard={props.fullBoard}
          isTemporaryFill={props.isTemporaryFill}
          selectedNumber={props.selectedNumber}
          data-test="row" />
      );
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
