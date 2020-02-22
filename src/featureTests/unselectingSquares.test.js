import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { beginGame } from '../testHelpers';
import App from '../containers/App/App';

describe('unselecting squares', () => {
  let wrapper;
  let selectedNumber;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter> 
    );
    beginGame(wrapper, 'Easy');
    selectedNumber = wrapper.find({ id: '9_numberButton' });
  });
  
  test('a user can unselect an editable square', () => {
    // find the first empty cell and keep track of its location
    let testCell = wrapper.find({ value: 0 }).first();
    let testCellCoord = testCell.prop('coord');

    // find the '8' selector
    selectedNumber = wrapper.find({ id: '8_numberButton' });
    
    // fill the target cell with an '8'
    selectedNumber.simulate('click');
    testCell.simulate('click');

    testCell = wrapper.find({ coord: testCellCoord });
    expect(testCell.prop('value')).toBe(8);
    
    // re-find the clicked cell
    testCell = wrapper.find({ coord: testCellCoord });
    
    // click the cell again, removing the 8
    selectedNumber.simulate('click');
    testCell.simulate('click');

    testCell = wrapper.find({ coord: testCellCoord });
    expect(testCell.prop('value')).toBe(0);
  });
});