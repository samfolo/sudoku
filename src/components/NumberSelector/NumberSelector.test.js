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
});