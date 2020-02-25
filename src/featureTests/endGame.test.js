import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { beginGame } from '../testHelpers';
import App from '../containers/App/App';

describe('trying again', () => {
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

  test('a user finishes a game and cannot edit their final submission', () => {
    selectedNumber = wrapper.find({ id: '6_numberButton' });
    selectedNumber.simulate('click');

    // click all empty cells:
    emptyCells = wrapper.findWhere((n) => n.prop('value') === 0 && n.name() === 'Cell');
    emptyCells.forEach(cell => cell.simulate('click'));

    // find all incorrect coordinates:
    const diff = wrapper.findWhere((n) => n.prop('diff') && n.name() === 'Cell').map((o) => { 
      return JSON.stringify(o.prop('diff'));
    })[0];
    const incorrectCells = wrapper.findWhere((n => diff.includes(JSON.stringify(n.prop('coord')))));

    // select an incorrect cell at random and click:
    const randomCell = incorrectCells.at(Math.floor(Math.random() * incorrectCells.length - 1));
    randomCell.simulate('click');
    
    // find all empty cells and expect there to be none:
    emptyCells = wrapper.findWhere((n) => n.prop('value') === 0 && n.name() === 'Cell');
    expect(emptyCells).toHaveLength(0);
  });
});
