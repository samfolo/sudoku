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
    const easyButton = findByTestAttr(wrapper, 'easy-button');
    const mediumButton = findByTestAttr(wrapper, 'medium-button');
    const hardButton = findByTestAttr(wrapper, 'hard-button');
    const expertButton = findByTestAttr(wrapper, 'expert-button');

    [easyButton, mediumButton, hardButton, expertButton].every(button => (
      expect(button).toHaveLength(1)
    ));
  });
});