import React, { useEffect, useState } from 'react';
import Classes from './Cell.module.css';

import SubCell from './SubCell/SubCell';

const Cell = props => {
  const [isFilled, setIsFilled] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [temporaryFillers, setTemporaryFillers] = useState([]);
  
  useEffect(() => {
    if (props.value !== 0) setIsFilled(true);
    if (props.isSolved) setIsEditable(false);
  }, [props.isSolved]);

  const handleClick = () => {
    if (props.isTemporaryFiller) {
      setTemporaryFillers([...temporaryFillers]) // 'push' new value, useContext?
    } else if (!props.isSolved && (!isFilled || isEditable)) {
      props.onClick(props.coord);
      setIsEditable(true);
    }
  }

  const getValue = () => {
    let value;
    if (props.placeholders?.length === 0) { // turn this into feature test, `click temporary fill button`
      value = props.value !== 0 ? props.value : null;
    } else {
      value = props.placeholders[0];
    }

    return props.value !== 0 ? props.value : null; // change back to `value`
  }


  const color = isEditable ? 'blue' : 'black';
  // const value = props.value !== 0 ? props.value : null;
  return (
    <div className={Classes.Cell} data-test="component-cell" onClick={handleClick}>
      <span className={Classes.InnerText} style={{ color }}>{getValue()}</span>
    </div>
  );
}

export default Cell;
