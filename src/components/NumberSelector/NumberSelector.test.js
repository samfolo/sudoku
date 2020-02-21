import NumberSelector from './NumberSelector';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<NumberSelector />', () => {
  let wrapper;
  let numberSelectorComponent;

  beforeEach(() => {
    wrapper = setup(NumberSelector);
    numberSelectorComponent = findByTestAttr(wrapper, 'component-number-selector');
  });

  it('renders without error', () => {
    expect(numberSelectorComponent).toHaveLength(1);
  });

  it('renders a selection of numbers', () => {
    const numbers = findByTestAttr(wrapper, 'number');
    expect(numbers).toHaveLength(9);
  });
});