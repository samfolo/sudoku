import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, beginGame } from '../testHelpers';
import { MemoryRouter } from 'react-router-dom';

import App from '../containers/App/App';

describe('a pencilled-in square', () => {
  let wrapper;
  let testCell;
  let testCellValue;
  let testCellCoord;
  let selectedNumber;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter> 
    );
    beginGame(wrapper, 'Easy');
    testCell = wrapper.find({ value: 0 }).first();
    testCellCoord = testCell.prop('coord');  
  });

  it('displays potential value of 7 instead of a solid value when passed a placeholder of 7', () => {
    selectedNumber = wrapper.find({ id: '3_numberButton' });
    selectedNumber.simulate('click');
    testCell.simulate('click');

    testCell = wrapper.find({ coord: testCellCoord });
    testCellValue = testCell.prop('value');
    expect(testCellValue).toBe(3);

    const temporaryFillButton = findByTestAttr(wrapper, 'temporary-fill');
    temporaryFillButton.simulate('click');

    selectedNumber = wrapper.find({ id: '7_numberButton' });
    selectedNumber.simulate('click');
    testCell.simulate('click');

    testCell = wrapper.find({ coord: testCellCoord });
    testCellValue = testCell.prop('value');
    
    expect(testCellValue).toBe(0);
    expect(testCell.text()).not.toContain('3');
    expect(testCell.text()).toContain('7');
  });

  it('displays potential value of 4 instead of a solid value when passed a placeholder of 4', () => {
    selectedNumber = wrapper.find({ id: '5_numberButton' });
    selectedNumber.simulate('click');
    testCell.simulate('click');

    testCell = wrapper.find({ coord: testCellCoord });
    testCellValue = testCell.prop('value');
    expect(testCellValue).toBe(5);

    const temporaryFillButton = findByTestAttr(wrapper, 'temporary-fill');
    temporaryFillButton.simulate('click');

    // first pencil in an '8' (in error)
    selectedNumber = wrapper.find({ id: '8_numberButton' });
    selectedNumber.simulate('click');
    testCell.simulate('click');

    // remove the '8'
    testCell.simulate('click');

    selectedNumber = wrapper.find({ id: '4_numberButton' });
    selectedNumber.simulate('click');
    testCell.simulate('click');

    testCell = wrapper.find({ coord: testCellCoord });
    testCellValue = testCell.prop('value');
    
    expect(testCellValue).toBe(0);
    expect(testCell.text()).not.toContain('5');
    expect(testCell.text()).toContain('4');
  });
});
