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

  describe('grid rows', () => {
    test('each row contains the numbers 1-9', () => {
      for (let i = 0; i < 9; i++) {
        let row = testSudoku.render()[i];
        let uniqueElements = Array.from(new Set(row));
        return expect(uniqueElements).toHaveLength(9);
      }
    });
  });
});
