import React from 'react';
import { mount } from 'enzyme';
import App from '../containers/App/App';
import { findByTestAttr } from '../testHelpers';

describe('a pencilled-in square', () => {
  let wrapper;
  let testCell;
  let testCellValue;
  let testCellCoord;
  let selectedNumber;

  beforeEach(() => {
    wrapper = mount(<App />);
    testCell = wrapper.find({ value: 0 }).first();
    testCellCoord = testCell.prop('coord');  
  });

  it('displays potential value of 6 instead of a solid value when passed a placeholder of 6', () => {
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
});
