import SudokuPage from './SudokuPage';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<SudokuPage />', () => {
  let wrapper;
  let sudokuPageComponent;

  beforeEach(() => {
    wrapper = setup(SudokuPage);
    sudokuPageComponent = findByTestAttr(wrapper, 'component-sudoku-page');
  });

  it('renders without error', () => {
    expect(sudokuPageComponent).toHaveLength(1);
  });

  it('renders <Sudoku />', () => {
    const sudoku = findByTestAttr(wrapper, 'sudoku');
    expect(sudoku).toHaveLength(1);
  });
});

