import Cell from './Cell';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Cell />', () => {
  let wrapper;
  let cellComponent;
  const defaultProps = { fullBoard: true, value: 9, placeholders: [], diff: [] };

  beforeEach(() => {
    wrapper = setup(Cell, defaultProps);
    cellComponent = findByTestAttr(wrapper, 'component-cell');
  });

  it('renders without error', () => {
    expect(cellComponent).toHaveLength(1);
  });

  it('displays its value', () => {
    expect(wrapper.text()).toBe('9');
  });
});
