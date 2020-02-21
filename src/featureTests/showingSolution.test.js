import React from 'react';
import { mount } from 'enzyme';
import App from '../containers/App/App';
import { findByTestAttr } from '../testHelpers';

describe('showing solution', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });
  
  test('a user wants to see the full solution', async () => {
    const showSolutionButton = findByTestAttr(wrapper, 'show-solution');
    showSolutionButton.simulate('click');

    expect(wrapper.text().includes('0')).toBe(false);
  });
});