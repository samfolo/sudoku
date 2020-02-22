import SettingsPage from './SettingsPage';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<SettingsPage />', () => {
  let wrapper;
  let settingsPageComponent;

  beforeEach(() => {
    wrapper = setup(SettingsPage);
    settingsPageComponent = findByTestAttr(wrapper, 'component-settings-page');
  });

  it('renders without error', () => {
    expect(settingsPageComponent).toHaveLength(1);
  });

  it('renders a difficulty picker', () => {
    const difficultyPicker = findByTestAttr(wrapper, 'difficulty-picker');
    expect(difficultyPicker).toHaveLength(1);
  });
});
