import NumberButton from './NumberButton';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<Number />', () => {
  let wrapper;
  let numberComponent;

  beforeEach(() => {
    wrapper = setup(NumberButton);
    numberComponent = findByTestAttr(wrapper, 'component-number-button');
  });

  it('renders without error', () => {
    expect(numberComponent).toHaveLength(1);
  });

  it('displays its value', () => {
    wrapper = setup(NumberButton, { value: 6 });
    expect(wrapper.text()).toBe('6');
  });
});