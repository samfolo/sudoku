import Cell from './Cell';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Cell />', () => {
  let wrapper;
  let cellComponent;

  beforeEach(() => {
    wrapper = setup(Cell, { placeholders: [9] });
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
    it('displays potential value of 6 instead of a solid value when passed `placeholders: [6]`', () => {
      wrapper = setup(Cell, { value: 2, placeholders: [6] });
      expect(wrapper.text()).toContain('6');
      expect(wrapper.text()).not.toContain('2');
    });

    it('displays potential value of 8 instead of a solid value when passed `placeholders: [8]`', () => {
      wrapper = setup(Cell, { value: 1, placeholders: [8] });
      expect(wrapper.text()).toContain('8');
      expect(wrapper.text()).not.toContain('1');
    });
  });
});
