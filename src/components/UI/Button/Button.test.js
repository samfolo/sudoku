import Button from './Button';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<Number />', () => {
  let wrapper;
  let buttonComponent;

  beforeEach(() => {
    wrapper = setup(Button);
    buttonComponent = findByTestAttr(wrapper, 'component-button');
  });

  it('renders without error', () => {
    expect(buttonComponent).toHaveLength(1);
  });

  it('renders any text passed as a prop', () => {
    wrapper = setup(Button, { text: 'Testing' });
    buttonComponent = findByTestAttr(wrapper, 'component-button');
    expect(buttonComponent.text()).toEqual('Testing');
  });
});