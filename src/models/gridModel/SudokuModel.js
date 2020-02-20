export default class Sudoku {
  render = () => {
    const numbers = [...Array(9).keys()].map(el => el + 1);
    return [...Array(9).fill(numbers)];
  }
};
