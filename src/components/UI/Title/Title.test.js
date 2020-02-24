import Title from './Title';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<Title />', () => {
  let wrapper;
  let titleComponent;

  beforeEach(() => {
    wrapper = setup(Title);
    titleComponent = findByTestAttr(wrapper, 'component-title');
  });

  it('renders without error', () => {
    expect(titleComponent).toHaveLength(1);
  });

  it('renders a title image', () => {
    const image = findByTestAttr(wrapper, 'title-image');
    expect(image).toHaveLength(1);
  });
});