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

  it('renders 9 <Rows />', () => {
    const rows = findByTestAttr(wrapper, 'row');
    expect(rows).toHaveLength(9);
  });
});