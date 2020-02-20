import React from 'react';
import Classes from './Row.module.css';

import Cell from '../Cell/Cell';

const Row = props => {
  return (
    <div className={Classes.Row} data-test="component-row">
      <Cell data-test="cell" />
      <Cell data-test="cell" />
      <Cell data-test="cell" />
      <Cell data-test="cell" />
      <Cell data-test="cell" />
      <Cell data-test="cell" />
      <Cell data-test="cell" />
      <Cell data-test="cell" />
      <Cell data-test="cell" />
    </div>
  )
}

export default Row;
