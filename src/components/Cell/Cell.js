import React from 'react';
import Classes from './Cell.module.css';

const Cell = props => {
  const handleClick = () => {
    props.onClick(props.coord);
  }

  const value = props.value !== 0 ? props.value : null;
  return (
    <div className={Classes.Cell} data-test="component-cell" onClick={handleClick}>
      <span className={Classes.InnerText}>{value}</span>
    </div>
  );
}

export default Cell;
