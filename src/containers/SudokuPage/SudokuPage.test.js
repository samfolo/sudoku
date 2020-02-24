import SudokuPage from './SudokuPage';
import { setup, findByTestAttr } from '../../testHelpers';
import SudokuModel from '../../models/SudokuModel/SudokuModel';

describe('<SudokuPage />', () => {
  let wrapper;
  let sudokuPageComponent;
  let testSudoku;

  beforeEach(() => {
    testSudoku = new SudokuModel();
    wrapper = setup(SudokuPage, { model: testSudoku });
    sudokuPageComponent = findByTestAttr(wrapper, 'component-sudoku-page');
  });
  
  it('renders without error', () => {
    expect(sudokuPageComponent).toHaveLength(1);
  });
  
  it('renders <Sudoku />', () => {
    const sudoku = findByTestAttr(wrapper, 'sudoku');
    expect(sudoku).toHaveLength(1);
  });
  
  it('renders a number selector', () => {
    const numberSelector = findByTestAttr(wrapper, 'number-selector');
    expect(numberSelector).toHaveLength(1);
  });
  
  it('renders a show solution button', () => {
    const showSolution = findByTestAttr(wrapper, 'show-solution');
    expect(showSolution).toHaveLength(1);
  });
  
  it('renders a `temporary fill` button', () => {
    const temporaryFill = findByTestAttr(wrapper, 'temporary-fill');
    expect(temporaryFill).toHaveLength(1);
  });
  
  describe('a full sudoku grid', () => {
    it('renders a `Try again?` button', () => {
      wrapper = setup(SudokuPage, { model: testSudoku, fullBoard: true });
      const tryAgain = findByTestAttr(wrapper, 'try-again');
      expect(tryAgain).toHaveLength(1);
    })
  });
});

