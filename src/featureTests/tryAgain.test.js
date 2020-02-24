import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { beginGame, findByTestAttr } from '../testHelpers';
import App from '../containers/App/App';

describe('trying again', () => {
  let wrapper;
  let emptyCells;
  let selectedNumber;
  let tryAgain;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter> 
    );
    beginGame(wrapper, 'Easy');
  });

  test('a user wants to play again', () => {
    selectedNumber = wrapper.find({ id: '6_numberButton' });
    selectedNumber.simulate('click');

    emptyCells = wrapper.findWhere((n) => n.prop('value') === 0 && n.name() === 'Cell');
    emptyCells.forEach(cell => cell.simulate('click'));

    tryAgain = findByTestAttr(wrapper, 'try-again');
    tryAgain.simulate('click');
    
    expect(wrapper.text()).toContain('Choose a difficulty');
  });
});
