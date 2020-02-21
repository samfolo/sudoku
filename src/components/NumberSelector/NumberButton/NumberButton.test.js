import Number from './NumberButton';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<Number />', () => {
  let wrapper;
  let numberComponent;

  beforeEach(() => {
    wrapper = setup(Number);
    numberComponent = findByTestAttr(wrapper, 'component-number-button');
  });

  it('renders without error', () => {
    expect(numberComponent).toHaveLength(1);
  });
});