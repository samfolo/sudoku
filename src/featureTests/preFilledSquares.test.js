import React from 'react';
import { mount } from 'enzyme';
import App from '../containers/App/App';

describe('pre-filled square', () => {
  let wrapper;
  let filledCell;
  let filledCellValue;
  let filledCellCoord;
  let selectedNumber;

  beforeEach(() => {
    wrapper = mount(<App />);
    filledCell = wrapper.findWhere((n) => n.prop('value') !== 0 && n.name() === 'Cell').first();
    filledCellValue = filledCell.prop('value');
    filledCellCoord = filledCell.prop('coord');
    selectedNumber = wrapper.find({ id: '6_numberButton' });
  });
  
  it('prevents a user from changing its value', () => {
    selectedNumber.simulate('click');
    filledCell.simulate('click');
    filledCell = wrapper.find({ coord: filledCellCoord });
    
    expect(filledCell.prop('value')).toBe(filledCellValue);
  });
  
  it('prevents a user from changing its value', () => {
    // find the first empty cell and keep track of its location
    let emptyCell = wrapper.find({ value: 0 }).first();
    let emptyCellCoord = emptyCell.prop('coord');

    // find the '8' selector
    selectedNumber = wrapper.find({ id: '8_numberButton' });
    
    // fill the target cell with an '8'
    selectedNumber.simulate('click');
    emptyCell.simulate('click');

    emptyCell = wrapper.find({ coord: emptyCellCoord });
    expect(emptyCell.prop('value')).toBe(8);
    
    // find the '4' selector and re-find the clicked cell
    selectedNumber = wrapper.find({ id: '4_numberButton' });
    emptyCell = wrapper.find({ coord: emptyCellCoord });
    
    // re-fill the cell with a '4', removing the 8
    selectedNumber.simulate('click');
    emptyCell.simulate('click');

    emptyCell = wrapper.find({ coord: emptyCellCoord });
    expect(emptyCell.prop('value')).toBe(4);
  });
});