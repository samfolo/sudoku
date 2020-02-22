import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { findByTestAttr } from '../testHelpers';

import App from '../containers/App/App';

describe('showing solution', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/play"]}>
        <App />
      </MemoryRouter> 
    );
  });
  
  test('a user wants to see the full solution', async () => {
    const showSolutionButton = findByTestAttr(wrapper, 'show-solution');
    showSolutionButton.simulate('click');

    expect(wrapper.text().includes('0')).toBe(false);
  });
});