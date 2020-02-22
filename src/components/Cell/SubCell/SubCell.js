import React from 'react';
import Classes from './SubCell.module.css';

const SubCell = props => {
  return (
    <div className={Classes.SubCell} data-test="component-sub-cell">
      {props.value}
    </div>
  );
};

export default SubCell;
