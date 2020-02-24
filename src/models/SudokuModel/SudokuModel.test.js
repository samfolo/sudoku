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
      const gatherSubGrids = (subGrids, third, coordA, coordB, coordC) => {
        third.forEach(row => {
          row.forEach((el, i) => {
            switch (true) {
              case (i < 3) : subGrids[coordA] = [...subGrids[coordA], el]; break;
              case (i < 6) : subGrids[coordB] = [...subGrids[coordB], el]; break;
              default : subGrids[coordC] = [...subGrids[coordC], el]; break;
            }
          });
        });
      };

      let subGrids = [[], [], [], [], [], [], [], [], []];

      let firstThird = testSudoku.renderSolution().slice(0, 3);
      let secondThird = testSudoku.renderSolution().slice(3, 6);;
      let thirdThird = testSudoku.renderSolution().slice(6);

      gatherSubGrids(subGrids, firstThird, 0, 1, 2);
      gatherSubGrids(subGrids, secondThird, 3, 4, 5);
      gatherSubGrids(subGrids, thirdThird, 6, 7, 8);

      subGrids.every(subGrid => expect(Array.from(new Set(subGrid))).toHaveLength(9));
    });
  });

  it('renders a different grid every time', () => {
    let secondTestSudoku;
    let secondTestGrid;

    secondTestSudoku = new SudokuModel();
    secondTestSudoku.generateGrid();
    secondTestGrid = secondTestSudoku.renderSolution();

    expect(JSON.stringify(testGrid)).not.toEqual(JSON.stringify(secondTestGrid));
  });

  describe('grids with clues', () => {
    const allClues = () => {
      const allValues = testSudoku.renderPartial().reduce((acc, val) => acc.concat(val), []);
      return allValues.filter(el => el !== 0);
    }

    const runGridsWithCluesTestWith = (difficulty, expected) => {
      testSudoku.generatePartial(difficulty);
      expect(allClues()).toHaveLength(expected);
    }

    it('can render a version of the grid with only 36 clues', () => runGridsWithCluesTestWith('Easy', 36));
    it('can render a version of the grid with only 27 clues', () => runGridsWithCluesTestWith('Medium', 27));
    it('can render a version of the grid with only 21 clues', () => runGridsWithCluesTestWith('Hard', 21));
    it('can render a version of the grid with only 17 clues', () => runGridsWithCluesTestWith('Expert', 17));

    it('throws an error when passed an invalid difficulty', () => {
      expect(() => { testSudoku.generatePartial('Unbelievably Hard, Basically Impossible') }).toThrowError();
    });
  });

  describe('entering a guess', () => {
    let emptyGrid;

    beforeEach(() => {
      emptyGrid = generateGrid([]);
      testSudoku = new SudokuModel(undefined, emptyGrid);
    })

    describe('fillCell()', () => {
      it('does not replace the targeted value [8, 8] with `twelve` when passed [8, 8] && `twelve`', () => {
        testSudoku.fillCell([8, 8], 'twelve');
        expect(testSudoku.renderPartial()[8][8]).toBe(0);
        expect(testSudoku.renderPartial()[8][8]).not.toBe('twelve');
      });

      it('does not replace the targeted value [6, 1] with 13 when passed [6, 1] && 13', () => {
        testSudoku.fillCell([6, 1], 13);
        expect(testSudoku.renderPartial()[1][6]).toBe(0);
        expect(testSudoku.renderPartial()[1][6]).not.toBe(13);
      });

      it('does not replace the targeted value [4, 7] with -2 when passed [4, 7] && -2', () => {
        testSudoku.fillCell([4, 7], -2);
        expect(testSudoku.renderPartial()[7][4]).toBe(0);
        expect(testSudoku.renderPartial()[7][4]).not.toBe(-2);
      });

      it('replaces the targeted value [5, 5] with 8 when passed [5, 5] && 8', () => {
        testSudoku.fillCell([5, 5], 8);
        expect(testSudoku.renderPartial()[5][5]).toBe(8);
      });

      it('replaces the targeted value [3, 4] with 2 when passed [3, 4] && 2', () => {
        testSudoku.fillCell([3, 4], 2);
        expect(testSudoku.renderPartial()[4][3]).toBe(2);
      });
    });

    describe('clearCell()', () => {
      it('replaces the targeted value [5, 5] with 0 when passed [5, 5] && 8', () => {
        testSudoku.fillCell([5, 5], 8);
        expect(testSudoku.renderPartial()[5][5]).toBe(8);
        
        testSudoku.clearCell([5, 5]);
        expect(testSudoku.renderPartial()[5][5]).toBe(0);
      });
    });

    describe('fillPartial()', () => {
      it('fills in all squares with the correct values', () => {
        testSudoku.generateGrid();
        testSudoku.fillPartial();
        const allValues = testSudoku.renderPartial().reduce((acc, val) => acc.concat(val), []);
        const emptyValues = allValues.filter(value => value === 0);
        expect(emptyValues).toHaveLength(0)
      });
    });

    describe('cellsLeft()', () => {
      it('returns 81 after 6 cells are filled on a blank 9 x 9 grid', () => {
        expect(testSudoku.cellsLeft()).toBe(81);
      });

      it('returns 78 after 3 cells are filled on a blank 9 x 9 grid', () => {
        testSudoku.fillCell([6, 6], 2);
        testSudoku.fillCell([4, 1], 9);
        testSudoku.fillCell([3, 8], 7);

        expect(testSudoku.cellsLeft()).toBe(78);
      });

      it('returns 79 after 3 cells are filled and one is cleared on a blank 9 x 9 grid', () => {
        testSudoku.fillCell([6, 6], 2);
        testSudoku.fillCell([4, 1], 9);
        testSudoku.fillCell([3, 8], 7);
        
        // toggles fill if coordinate is already occupied
        testSudoku.fillCell([6, 6], 2);

        expect(testSudoku.cellsLeft()).toBe(79);
      });

      it('returns 75 after 6 cells are filled on a blank 9 x 9 grid', () => {
        testSudoku.fillCell([6, 6], 2);
        testSudoku.fillCell([4, 1], 9);
        testSudoku.fillCell([3, 8], 7);
        testSudoku.fillCell([1, 1], 4);
        testSudoku.fillCell([3, 2], 5);
        testSudoku.fillCell([0, 0], 8);

        expect(testSudoku.cellsLeft()).toBe(75);
      });
    });
  });
});
