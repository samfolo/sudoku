import React from 'react';
import Classes from './SubCell.module.css';

const SubCell = props => {
  const value = props.value !== 0 ? props.value : null;

  const color = '#21ffda';

  return (
    <div className={Classes.SubCell} data-test="component-sub-cell" style={{ color }}>
      <span className={Classes.InnerText}>{value}</span>
    </div>
  );
};

export default SubCell;
