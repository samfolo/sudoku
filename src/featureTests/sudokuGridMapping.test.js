import React from 'react';
import { mount } from 'enzyme';

import SudokuPage from '../containers/SudokuPage/SudokuPage';
import SudokuModel from '../models/SudokuModel/SudokuModel';
import { generateGrid } from '../testHelpers';

describe('interacting with the grid', () => {
  let wrapper;
  let testGrid;
  let mockClick;
  let testCell;

  const fillCellAt = (coord, value) => testGrid.fillCell(coord, value);
  
  beforeEach(() => {
    mockClick = jest.fn();
    testGrid = new SudokuModel(undefined, generateGrid([]));
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} />);
  });

  // check this
  test('a user places the number 5 at the center of a grid', () => {
    const selectFive = wrapper.find({ id: '5_numberButton'});
    testCell = wrapper.find({ id: '44_cell'});
    mockClick = fillCellAt(testCell.prop('coord'), selectFive.prop('value'));
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} />);

    testCell = wrapper.find({ id: '44_cell'});
    expect(testCell.prop('value')).toBe(5);
  });

  test('a user places the number 7 at [6, 5]', () => {
    const selectSeven = wrapper.find({ id: '7_numberButton'});
    testCell = wrapper.find({ id: '65_cell'});
    mockClick = fillCellAt(testCell.prop('coord'), selectSeven.prop('value'));
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} />);

    testCell = wrapper.find({ id: '65_cell'});
    expect(testCell.prop('value')).toBe(7);
  });

  test('a user places the number 1 at [1, 8]', () => {
    const selectOne = wrapper.find({ id: '1_numberButton'});
    testCell = wrapper.find({ id: '18_cell'});
    mockClick = fillCellAt(testCell.prop('coord'), selectOne.prop('value'));
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} />);

    testCell = wrapper.find({ id: '18_cell'});
    expect(testCell.prop('value')).toBe(1);
  });
})