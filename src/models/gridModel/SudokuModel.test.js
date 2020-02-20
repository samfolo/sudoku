import SudokuModel from './SudokuModel';

describe(SudokuModel, () => {
  let testSudoku;
  let testGrid;

  beforeEach(() => {
    testSudoku = new SudokuModel();
    testSudoku.generateGrid();
    testGrid = testSudoku.render();
  });

  it('can render a 9 x 9 grid', () => {
    // renders 9 rows
    expect(testGrid).toHaveLength(9);
    
    // renders 9 items per row
    testGrid.every(row => expect(row).toHaveLength(9));
  });

  describe('grid rows', () => {
    test('each row contains the numbers 1-9', () => {
      testGrid.every(row => expect(Array.from(new Set(row))).toHaveLength(9));
    });
  });

  describe('grid columns', () => {
    test('each column contains the numbers 1-9', () => {
      let columns = [[], [], [], [], [], [], [], [], []];

      testGrid.forEach((row) => {
        row.forEach((el, i) => {
          columns[i] = [...columns[i], el];
        });
      });

      columns.every(column => expect(Array.from(new Set(column))).toHaveLength(9));
    });
  });

  describe('sub-grids', () => {
    test('each sub-grid contains the numbers 1-9', () => {
      let subGrids = [[], [], [], [], [], [], [], [], []];

      let firstThird = testSudoku.render().slice(0, 3);
      let secondThird = testSudoku.render().slice(3, 6);;
      let thirdThird = testSudoku.render().slice(6);

      firstThird.forEach(row => {
        row.forEach((el, i) => {
          switch (true) {
            case (i < 3) : subGrids[0] = [...subGrids[0], el]; break;
            case (i < 6) : subGrids[1] = [...subGrids[1], el]; break;
            default : subGrids[2] = [...subGrids[2], el]; break;
          }
        });
      });

      secondThird.forEach(row => {
        row.forEach((el, i) => {
          switch (true) {
            case (i < 3) : subGrids[3] = [...subGrids[3], el]; break;
            case (i < 6) : subGrids[4] = [...subGrids[4], el]; break;
            default : subGrids[5] = [...subGrids[5], el]; break;
          }
        });
      });

      thirdThird.forEach(row => {
        row.forEach((el, i) => {
          switch (true) {
            case (i < 3) : subGrids[6] = [...subGrids[6], el]; break;
            case (i < 6) : subGrids[7] = [...subGrids[7], el]; break;
            default : subGrids[8] = [...subGrids[8], el]; break;
          }
        });
      });

      subGrids.every(subGrid => expect(Array.from(new Set(subGrid))).toHaveLength(9));
    });
  });

  it('renders a different grid every time', () => {
    const secondTestSudoku = new SudokuModel();
    secondTestSudoku.generateGrid();
    const secondTestGrid = secondTestSudoku.render();

    expect(JSON.stringify(testGrid)).not.toEqual(JSON.stringify(secondTestGrid));
  });
});
