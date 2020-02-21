import React from 'react';
import { mount } from 'enzyme';

import SudokuPage from '../containers/SudokuPage/SudokuPage';
import SudokuModel from '../models/SudokuModel/SudokuModel';
import { generateGrid, findByTestAttr } from '../testHelpers';

// jest.mock('../models/SudokuModel/SudokuModel');

describe('mapping', () => {
  let wrapper;

  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState')
  // useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = mount(<SudokuPage />);
  });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  test('a Sudoku grid can render with a number at [0, 0]', () => {
    // SudokuModel.mockImplementationOnce(() => {
    //   return {
    //     renderPartial: () => {
    //       return ;
    //     },
    //     generateGrid: jest.fn(),
    //   };
    // });
    // let spy = jest.spyOn(SudokuModel.prototype, 'generate').mockImplementation(() => generateGrid([[0, 0]]));

    // SudokuModel.prototype.partial = jest.fn().mockReturnValue(() => generateGrid([[0, 0]]));
    // let testSudokuModel = new SudokuModel();
    // console.log(testSudokuModel.partial);

    // const targetCell = wrapper.find({ id: '00_cell' });
    // expect(targetCell.prop('value')).toBe(1);

    // spy.mockRestore();
  });
})