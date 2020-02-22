import DifficultyPicker from './DifficultyPicker';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<DifficultyPicker />', () => {
  let wrapper;
  let difficultyPickerComponent;

  beforeEach(() => {
    wrapper = setup(DifficultyPicker);
    difficultyPickerComponent = findByTestAttr(wrapper, 'component-difficulty-picker');
  });

  it('renders without error', () => {
    expect(difficultyPickerComponent).toHaveLength(1);
  });
});