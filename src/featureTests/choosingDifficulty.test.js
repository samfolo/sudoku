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

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter> 
    );
    easyButton = findByTestAttr(wrapper, 'Easy-button');
    mediumButton = findByTestAttr(wrapper, 'Medium-button');
    hardButton = findByTestAttr(wrapper, 'Hard-button');
    expertButton = findByTestAttr(wrapper, 'Expert-button');
  });
  
  test('sudoku has a default difficulty of `Medium`', () => {
    expect(easyButton.prop('active')).toBe(false);
    expect(hardButton.prop('active')).toBe(false);
    expect(expertButton.prop('active')).toBe(false);

    expect(mediumButton.prop('active')).toBe(true);
  });

  // test('a user wants to adjust difficulty', () => {
  //   easyButton.simulate('click');

  //   expect(easyButton.prop('active')).toBe(false);
  //   expect(hardButton.prop('active')).toBe(false);
  //   expect(expertButton.prop('active')).toBe(false);
    
  //   expect(mediumButton.prop('active')).toBe(true);
  // });
});