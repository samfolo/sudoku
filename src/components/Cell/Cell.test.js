import Cell from './Cell';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Cell />', () => {
  let wrapper;
  let cellComponent;

  beforeEach(() => {
    wrapper = setup(Cell);
    cellComponent = findByTestAttr(wrapper, 'component-cell');
  });

  it('renders without error', () => {
    expect(cellComponent).toHaveLength(1);
  });
});
