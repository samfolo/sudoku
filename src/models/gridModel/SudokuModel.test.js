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
      testSudoku.render().every(row => expect(Array.from(new Set(row))).toHaveLength(9));
    });

    test('each column contains the numbers 1-9', () => {
      let columns = [[], [], [], [], [], [], [], [], []];

      testSudoku.render().forEach((row) => {
        row.forEach((el, i) => {
          columns[i] = [...columns[i], el];
        });
      });

      columns.every(column => expect(Array.from(new Set(column))).toHaveLength(9));
    });
  });
});
