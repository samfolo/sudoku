export default class Sudoku {
  constructor(grid = []) {
    this.grid = grid;
  }

  generateGrid = () => {
    let grid = [];
    let availableNumbers = [...Array(9).keys()].map(el => el + 1);
    let numbers = this.shuffle(availableNumbers, 9);

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

    grid = [
      ...this.shuffle(grid.slice(0, 3), 3),
      ...this.shuffle(grid.slice(3, 6), 3),
      ...this.shuffle(grid.slice(6), 3),
    ];
    this.grid = grid;
  }

  render = () => {
    return this.grid;
  }

  shuffle = (elements, length) => {
    let shuffledElements = [];
    let nextElement;

    for (let i = 0; i < length; i++) {
      nextElement = elements[Math.floor(Math.random() * elements.length)];
      shuffledElements = [...shuffledElements, nextElement];
      elements = [
        ...elements.slice(0, elements.indexOf(nextElement)), 
        ...elements.slice(elements.indexOf(nextElement) + 1)
      ];
    }
    
    return shuffledElements;
  }
};
