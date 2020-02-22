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

  describe('selecting difficulty', () => {
    const runTestWith = (button, expected) => {
      const playButton = findByTestAttr(wrapper, 'play-button');
  
      button.simulate('click');
      playButton.simulate('click');
      
      filledCells = wrapper.findWhere((n) => n.prop('value') !== 0 && n.name() === 'Cell');

      expect(filledCells).toHaveLength(expected);
    }

    test('a user selects a `Easy` difficulty then presses play', () => runTestWith(easyButton, 36));
    test('a user selects a `Medium` difficulty then presses play', () => runTestWith(mediumButton, 27));
    test('a user selects a `Hard` difficulty then presses play', () => runTestWith(hardButton, 21));
    test('a user selects an `Expert` difficulty then presses play', () => runTestWith(expertButton, 17));
  });
  
});