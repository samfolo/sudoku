import Sudoku from './Sudoku';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Sudoku />', () => {
  let wrapper;
  let sudokuComponent;

  beforeEach(() => {
    wrapper = setup(Sudoku);
    sudokuComponent = findByTestAttr(wrapper, 'component-sudoku');
  });

  it('renders without error', () => {
    expect(sudokuComponent).toHaveLength(1);
  });
});