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

  const handleTemporaryFill = number => {
    // toggle presence of pencilled-in number:
    if (temporaryFillers.includes(number)) {
      const index = temporaryFillers.indexOf(number);
      setTemporaryFillers([
        ...temporaryFillers.slice(0, index), 
        ...temporaryFillers.slice(index + 1)
      ]);
    } else {
      setTemporaryFillers([...temporaryFillers, number])
    }
  }

  const handleClick = async () => {
    const validClick = !props.isSolved && (!isFilled || isEditable);
    if (validClick && props.isTemporaryFill) {
      props.onClear(props.coord)
      handleTemporaryFill(props.selectedNumber);
      setIsEditable(false);
    } else if (validClick) {
      props.onClick(props.coord);
      setTemporaryFillers([]);
      setIsEditable(true);
    }
    console.log(props.value)
  }

  const renderTemporaryFillers = () => {
    const oneToNine = [...Array(9).keys()].map(el => el + 1);

    // return a zero padded list of pencilled-in numbers
    const subCells = oneToNine.map((el, index) => {
      return temporaryFillers.includes(el) ? 
        <SubCell key={`${index}_subCell`} value={el} /> :
        <SubCell key={`${index}_subCell`} value={0} />;
    });

    // return 3 x 3 grid
    return [
      <div key="subRow_1" className={Classes.SubRow}>{subCells.slice(0, 3)}</div>,
      <div key="subRow_2" className={Classes.SubRow}>{subCells.slice(3, 6)}</div>,
      <div key="subRow_3" className={Classes.SubRow}>{subCells.slice(6)}</div>,
    ];
  }
  
  const getValue = () => {
    let value;
    if (temporaryFillers.length === 0 || props.isSolved) {
      value = props.value !== 0 ? props.value : null;
    } else value = renderTemporaryFillers();

    return value;
  }

  const color = isEditable ? 'blue' : 'black';
  return (
    <div className={Classes.Cell} data-test="component-cell" onClick={handleClick}>
      <span className={Classes.InnerText} style={{ color }}>{getValue()}</span>
    </div>
  );
}

export default Cell;
