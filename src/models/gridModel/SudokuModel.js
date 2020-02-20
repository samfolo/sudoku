export default class Sudoku {
  constructor(grid = []) {
    this.grid = grid;
  }

  generateGrid = () => {
    let grid = [];
    let preshuffledNumbers = [...Array(9).keys()].map(el => el + 1);
    let numbers = this.shuffle(preshuffledNumbers, 9);

    for (let i = 0; i < 9; i++) {
      numbers = i % 3 === 0 ? [...numbers.slice(1), numbers[0]] : 
      [...numbers.slice(3), ...numbers.slice(0, 3)];
      grid = [...grid, numbers];
    }

    grid = [
      ...this.shuffle(grid.slice(0, 3), 3),
      ...this.shuffle(grid.slice(3, 6), 3),
      ...this.shuffle(grid.slice(6), 3),
    ];
    
    this.grid = grid;
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

  render = () => {
    return this.grid;
  }
};
