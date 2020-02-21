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

  it('displays its value', () => {
    wrapper = setup(Cell, { value: 9, placeholders: [] });
    expect(wrapper.text()).toBe('9');
  });

  describe('placeholders', () => {
    it('displays potential values instead of a solid value', () => {
      wrapper = setup(Cell, { value: 2, placeholders: [6] });
      expect(wrapper.text()).toContain('6');
      expect(wrapper.text()).not.toContain('2');
    });
  });
});
