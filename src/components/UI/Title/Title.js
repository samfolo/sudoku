import React from 'react';
import Classes from './Title.module.css';

const Title = props => {
  return (
    <div data-test="component-title" className={Classes.Title}>
      <img 
        src="Sudoku Heading.png" 
        alt="thing" data-test="title-image" />
    </div>
  );
}

export default Title;
