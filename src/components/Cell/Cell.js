import React from 'react';
import Classes from './Cell.module.css';

const Cell = props => {
  const value = props.value !== 0 ? props.value : null;
  return (
    <div className={Classes.Cell} data-test="component-cell" onClick={() => {console.log('this')}}>
      <span className={Classes.InnerText}>{value}</span>
    </div>
  );
}

export default Cell;
