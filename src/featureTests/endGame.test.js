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

    // select an 5 incorrects cells (coordinate independent) and click:
    const randomCell = incorrectCells.at(0);
    const randomCell2 = incorrectCells.at(4);
    const randomCell3 = incorrectCells.at(9);
    const randomCell4 = incorrectCells.at(20);
    const randomCell5 = incorrectCells.at(35);

    randomCell.simulate('click');
    randomCell2.simulate('click');
    randomCell3.simulate('click');
    randomCell4.simulate('click');
    randomCell5.simulate('click');
    
    // find all empty cells and expect there to be none:
    emptyCells = wrapper.findWhere((n) => n.prop('value') === 0 && n.name() === 'Cell');
    expect(emptyCells).toHaveLength(0);
  });
});
