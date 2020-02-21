import React from 'react';
import Classes from './NumberSelector.module.css';

import NumberButton from './NumberButton/NumberButton';

const NumberSelector = props => {
  const renderButtons = () => {
    const numbers = [...Array(9).keys()].map((_, i) => {
      return <NumberButton
        key={`${i}_numberButton`}
        id={`${i + 1}_numberButton`}
        value={i + 1}
        onClick={() => { props.onClick(i + 1) }}
        data-test="number" />
    });

    return numbers;
  }

  return (
    <div data-test="component-number-selector" className={Classes.NumberSelector}>
      <span className={Classes.NumberSelectorButtons}>{renderButtons()}</span>
    </div>
  )
}

export default NumberSelector;
