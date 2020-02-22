import React from 'react';
import Classes from './SubCell.module.css';

const SubCell = props => {
  const value = props.value !== 0 ? props.value : null;

  return (
    <div className={Classes.SubCell} data-test="component-sub-cell">
      <span className={Classes.InnerText}>{value}</span>
    </div>
  );
};

export default SubCell;
