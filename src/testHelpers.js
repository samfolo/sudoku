import React from 'react';
import { shallow } from 'enzyme';

export const setup = (Component, props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
}

export const generateGrid = (coordArray) => {
  let grid = [];
  for (let y = 0; y < 9; y++) {
    let row = [];
    for (let x = 0; x < 9; x++) {
      row = JSON.stringify(coordArray).includes(JSON.stringify([x, y])) ? 
      [...row, 1] : row = [...row, 0];
    }
    grid = [...grid, row];
  }

  return grid;
}

export const beginGame = (wrapper, difficulty) => {
  const button = findByTestAttr(wrapper, `${difficulty}-button`);
  const playButton = findByTestAttr(wrapper, 'play-button');
  button.simulate('click');
  playButton.simulate('click');
}
