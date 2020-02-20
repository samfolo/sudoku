import SudokuModel from './SudokuModel';

describe(SudokuModel, () => {
  let testSudoku;

  beforeEach(() => {
    testSudoku = new SudokuModel();
  });

  it('can render a 9 x 9 grid', () => {
    // renders 9 rows
    expect(testSudoku.render()).toHaveLength(9);
    
    // renders 9 items per row
    testSudoku.render().every(row => {
      return expect(row).toHaveLength(9);
    });
  });
});
