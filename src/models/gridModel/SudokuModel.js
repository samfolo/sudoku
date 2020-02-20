export default class Sudoku {
  constructor(grid = []) {
    this.grid = grid;
  }

  render = () => {
    let grid = [];
    let numbers = [...Array(9).keys()].map(el => el + 1);

    for (let i = 0; i < 9; i++) {
      if (i === 0) {
        grid = [...grid, numbers];
      } else if ((i) % 3 === 0) {
        numbers = [...numbers.slice(1), numbers[0]];
        grid = [...grid, numbers];
      } else {
        numbers = [...numbers.slice(3), ...numbers.slice(0, 3)];
        grid = [...grid, numbers];
      };
    }

    return grid;
  }
};
