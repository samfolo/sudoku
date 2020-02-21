import SudokuModel from './SudokuModel';
import { generateGrid } from '../../testHelpers';

describe(SudokuModel, () => {
  let testSudoku;
  let testGrid;

  beforeEach(() => {
    testSudoku = new SudokuModel();
    testSudoku.generateGrid();
    testGrid = testSudoku.renderSolution();
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

      let firstThird = testSudoku.renderSolution().slice(0, 3);
      let secondThird = testSudoku.renderSolution().slice(3, 6);;
      let thirdThird = testSudoku.renderSolution().slice(6);

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
    const secondTestGrid = secondTestSudoku.renderSolution();

    expect(JSON.stringify(testGrid)).not.toEqual(JSON.stringify(secondTestGrid));
  });

  describe('grids with clues', () => {
    it('can render a version of the grid with only 36 clues', () => {
      testSudoku.generatePartial('easy');
      const allValues = testSudoku.renderPartial().reduce((acc, val) => acc.concat(val), []);
      const clues = allValues.filter(el => el !== 0);

      expect(clues).toHaveLength(36)
    });
  });

  describe('entering a guess', () => {
    let emptyGrid = generateGrid([]);

    beforeEach(() => {
      testSudoku = new SudokuModel(undefined, emptyGrid);
    })

    describe('fillCell()', () => {
      it('replaces the targeted value [5, 5] with 8 when passed [5, 5] && 8', () => {
        testSudoku.fillCell([5, 5], 8);
        expect(testSudoku.renderPartial()[5][5]).toBe(8);
      });

      it('replaces the targeted value [3, 4] with 2 when passed [3, 4] && 2', () => {
        testSudoku.fillCell([3, 4], 2);
        expect(testSudoku.renderPartial()[4][3]).toBe(2);
      });

      it('does not replace the targeted value [8, 8] with `twelve` when passed [8, 8] && `twelve`', () => {
        testSudoku.fillCell([8, 8], 'twelve');
        expect(testSudoku.renderPartial()[8][8]).not.toBe('twelve');
        expect(testSudoku.renderPartial()[8][8]).toBe(0);
      });

      it('does not replace the targeted value [6, 1] with 13 when passed [6, 1] && 13', () => {
        testSudoku.fillCell([6, 1], 13);
        expect(testSudoku.renderPartial()[1][6]).not.toBe(13);
        expect(testSudoku.renderPartial()[1][6]).toBe(0);
      });

      it('does not replace the targeted value [4, 7] with -2 when passed [4, 7] && -2', () => {
        testSudoku.fillCell([4, 7], -2);
        expect(testSudoku.renderPartial()[7][4]).not.toBe(-2);
        expect(testSudoku.renderPartial()[7][4]).toBe(0);
      });
    });
  });
});
