export default class Sudoku {
  render = () => {
    let grid = [];
    let numbers = [...Array(9).keys()].map(el => el + 1);

    for (let i = 0; i < 9; i++) {
      if (i === 0) {
        grid = [...grid, numbers];
      } else if (grid[i - 1][0] === numbers[0]) {
        numbers = [...numbers.slice(1), numbers[0]];
        grid = [...grid, numbers];
      };
    }

    return grid;
  }
};
