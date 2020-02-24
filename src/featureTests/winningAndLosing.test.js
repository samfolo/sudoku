import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { beginGame, findByTestAttr } from '../testHelpers';
import App from '../containers/App/App';

describe('winning and losing', () => {
  let wrapper;
  let emptyCells;
  let selectedNumber;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter> 
    );
    beginGame(wrapper, 'Easy');
  });

  test('a player loses a game', () => {
    expect(wrapper).not.toContain('Try again?');

    selectedNumber = wrapper.find({ id: '9_numberButton' });
    selectedNumber.simulate('click');

    emptyCells = wrapper.findWhere((n) => n.prop('value') === 0 && n.name() === 'Cell');
    emptyCells.forEach(cell => cell.simulate('click'));

    expect(wrapper.text()).toContain('Try again?');
  });
});
