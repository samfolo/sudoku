import DifficultyButton from './DifficultyButton';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<DifficultyButton />', () => {
  let wrapper;
  let difficultyButtonComponent;

  beforeEach(() => {
    wrapper = setup(DifficultyButton);
    difficultyButtonComponent = findByTestAttr(wrapper, 'component-difficulty-button');
  });

  it('renders without error', () => {
    expect(difficultyButtonComponent).toHaveLength(1);
  });

  it('displays its difficulty', () => {
    wrapper = setup(DifficultyButton, { value: 'Medium' });
    expect(wrapper.text()).toEqual('Medium')
  });
});
