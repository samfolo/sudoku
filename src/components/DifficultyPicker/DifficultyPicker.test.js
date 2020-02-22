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

  it('renders `easy`, `medium`, `hard` and `expert` buttons', () => {
    const easyButton = findByTestAttr(wrapper, 'Easy-button');
    const mediumButton = findByTestAttr(wrapper, 'Medium-button');
    const hardButton = findByTestAttr(wrapper, 'Hard-button');
    const expertButton = findByTestAttr(wrapper, 'Expert-button');

    [easyButton, mediumButton, hardButton, expertButton].every(button => (
      expect(button).toHaveLength(1)
    ));
  });
});