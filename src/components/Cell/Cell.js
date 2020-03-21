import React, { useEffect, useState } from 'react';
import Classes from './Cell.module.css';

import SubCell from './SubCell/SubCell';

// boolean for grid visibility (checkered pattern):
const isDark = coord => {
  const inCornerSquare = [0, 1, 2, 6, 7, 8].includes(coord[0]) &&
  [0, 1, 2, 6, 7, 8].includes(coord[0]) &&
    [0, 1, 2, 6, 7, 8].includes(coord[1]);

  const inCenterSquare = [3, 4, 5].includes(coord[0]) &&
  [3, 4, 5].includes(coord[1]);

  return inCornerSquare || inCenterSquare;
}

const Cell = props => {
  const [isFilled, setIsFilled] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [temporaryFillers, setTemporaryFillers] = useState([]);
  
  useEffect(() => {
    if (props.value !== 0) setIsFilled(true);
    if (props.isSolved) setIsEditable(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (props.fullBoard) return;
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


  const getEndGameColor = () => {
    const wrongValue = props.diff.some((coord) => coord[0] === props.coord[0] && coord[1] === props.coord[1]);
    if (props.fullBoard && wrongValue) return 'rgba(255, 0, 0, 0.1)'
    if (props.fullBoard && props.diff.length === 0) return 'rgba(47, 188, 44, 0.1)';
    if (!isDark(props.coord)) return '#1a1a1a';
  }

  let color = isEditable ? '#21ffda' : '#636363';
  if (props.fullBoard && props.diff.length === 0) color = 'rgba(47, 188, 44)';
  const backgroundColor = getEndGameColor();
  return (
    <div 
      className={Classes.Cell} 
      data-test="component-cell" 
      onClick={handleClick}
      id={props.id}
      style={{ backgroundColor }}>
      <span className={Classes.InnerText} style={{ color }}>{getValue()}</span>
    </div>
  );
}

export default Cell;
