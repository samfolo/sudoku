import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { findByTestAttr } from '../testHelpers';

import App from '../containers/App/App';

describe('choosing a difficulty', () => {
  let wrapper;
  let easyButton;  
  let mediumButton; 
  let hardButton;
  let expertButton;
  let filledCells;

  const findAllButtons = () => {
    easyButton = findByTestAttr(wrapper, 'Easy-button');
    mediumButton = findByTestAttr(wrapper, 'Medium-button');
    hardButton = findByTestAttr(wrapper, 'Hard-button');
    expertButton = findByTestAttr(wrapper, 'Expert-button');
  }

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter> 
    );
    findAllButtons();
  });
  
  test('sudoku has a default difficulty of `Medium`', () => {
    expect(easyButton.prop('active')).toBe(false);
    expect(hardButton.prop('active')).toBe(false);
    expect(expertButton.prop('active')).toBe(false);
    
    expect(mediumButton.prop('active')).toBe(true);
  });
  
  test('a user wants to adjust difficulty', () => {
    easyButton.simulate('click');
    
    findAllButtons();

    expect(mediumButton.prop('active')).toBe(false);
    expect(hardButton.prop('active')).toBe(false);
    expect(expertButton.prop('active')).toBe(false);

    expect(easyButton.prop('active')).toBe(true);
  });

  test('a user selects a difficulty then presses play', () => {
    mediumButton.simulate('click');

    const playButton = findByTestAttr(wrapper, 'play-button');
    playButton.simulate('click');

    filledCells = wrapper.findWhere((n) => n.prop('value') !== 0 && n.name() === 'Cell');
    expect(filledCells).toHaveLength(27);
  });
});