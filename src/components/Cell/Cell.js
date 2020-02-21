import React, { useEffect, useState } from 'react';
import Classes from './Cell.module.css';

const Cell = props => {
  const [isFilled, setIsFilled] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  
  useEffect(() => {
    if (props.value !== 0) setIsFilled(true);
    if (props.isSolved) setIsEditable(false);
  }, [props.isSolved]);

  const handleClick = () => {
    if (!props.isSolved && (!isFilled || isEditable)) {
      props.onClick(props.coord);
      setIsEditable(true);
    }
  }


  const color = isEditable ? 'blue' : 'black';
  const value = props.value !== 0 ? props.value : null;
  return (
    <div className={Classes.Cell} data-test="component-cell" onClick={handleClick}>
      <span className={Classes.InnerText} style={{ color }}>{value}</span>
    </div>
  );
}

export default Cell;
