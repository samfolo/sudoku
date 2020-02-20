import React from 'react';
import Classes from './Cell.module.css';

const Cell = props => {
  return (
    <div className={Classes.Cell} data-test="component-cell" />
  );
}

export default Cell;
