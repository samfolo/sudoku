import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import SudokuPage from '../containers/SudokuPage/SudokuPage';
import SudokuModel from '../models/SudokuModel/SudokuModel';
import { generateGrid } from '../testHelpers';

describe('interacting with the grid', () => {
  let wrapper;
  let testGrid;
  let mockClick;
  let testCell;
  let testCoord;

  const fillCellAt = (coord, value) => testGrid.fillCell(coord, value);
  
  beforeEach(() => {
    testGrid = new SudokuModel(undefined, generateGrid([]));
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} test />);
    testCell = wrapper.find({ value: 0}).first();
    testCoord = testCell.prop('coord');
  });

  test('a user places the number 5 at the center of a grid', () => {
    mockClick = fillCellAt(testCoord, 5);
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} test />);

    testCell = wrapper.find({ coord: testCoord });
    expect(testCell.prop('value')).toBe(5);
  });

  test('a user places the number 7 at [6, 5]', () => {
    mockClick = fillCellAt(testCoord, 7);
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} test />);

    testCell = wrapper.find({ coord: testCoord });
    expect(testCell.prop('value')).toBe(7);
  });

  test('a user places the number 1 in an empty square', () => {
    mockClick = fillCellAt(testCoord, 1);
    wrapper = mount(<SudokuPage model={testGrid} onFill={mockClick} test />);

    testCell = wrapper.find({ coord: testCoord });
    expect(testCell.prop('value')).toBe(1);
  });
})