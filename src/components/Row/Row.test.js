import Row from './Row';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Row />', () => {
  let wrapper;
  let rowComponent;

  beforeEach(() => {
    wrapper = setup(Row);
    rowComponent = findByTestAttr(wrapper, 'component-row');
  });

  it('renders without error', () => {
    expect(rowComponent).toHaveLength(1);
  });
  
  it('renders 9 <Cell /> components', () => {
    const cells = findByTestAttr(wrapper, 'cell');
    expect(cells).toHaveLength(9);
  });
});
