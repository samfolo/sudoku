import Sudoku from './Sudoku';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Sudoku />', () => {
  let wrapper;
  let sudokuComponent;
  let modelDouble = { renderPartial: () => { return [...Array(9).keys()] } };

  beforeEach(() => {
    wrapper = setup(Sudoku, { model: modelDouble });
    sudokuComponent = findByTestAttr(wrapper, 'component-sudoku');
  });

  it('renders without error', () => {
    expect(sudokuComponent).toHaveLength(1);
  });

  it('renders 9 <Row /> components', () => {
    const rows = findByTestAttr(wrapper, 'row');
    expect(rows).toHaveLength(9);
  });
});