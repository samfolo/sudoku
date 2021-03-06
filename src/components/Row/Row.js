import React from 'react';
import Classes from './Row.module.css';

import Cell from '../Cell/Cell';

const Row = props => {
  const renderCells = () => {
    return props.values.map((cell, index) => {
      return (
        <Cell 
          key={`${index}${props.yCoord}_cell`}
          id={`${index}${props.yCoord}_cell`}
          value={cell}
          diff={props.diff}
          onClick={props.onClick}
          onClear={props.onClear}
          coord={[index, props.yCoord]}
          isSolved={props.isSolved}
          fullBoard={props.fullBoard}
          isTemporaryFill={props.isTemporaryFill}
          selectedNumber={props.selectedNumber}
          data-test="cell" />
      )
    });
  }

  return (
    <div className={Classes.Row} data-test="component-row">
      {renderCells()}
    </div>
  )
}

export default Row;
