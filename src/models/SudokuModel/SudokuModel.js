import solve from '../sudokuGenerator';

export default class SudokuModel {
  constructor(grid = [], partial = []) {
    this.solution = grid;
    this.partial = partial;
  }

  generateGrid = () => {
    let preshuffledNumbers = [...Array(9).keys()].map(el => el + 1);

    // shuffle first row:
    let numbers = this.shuffle(preshuffledNumbers, 9);

    // fill grid with 8 other empty rows:
    let grid = [numbers];
    let emptyRow;
    for (let i = 0; i < 8; i++) {
      emptyRow = [...Array(9).keys()].map(_ => 0);
      grid = [...grid, emptyRow];
    }

    // generate solution from single row
    grid = solve(grid);
    
    // shuffle rows per each third:
    grid = [
      ...this.shuffle(grid.slice(0, 3), 3),
      ...this.shuffle(grid.slice(3, 6), 3),
      ...this.shuffle(grid.slice(6), 3),
    ];
    
    // rotate 90 degrees:
    let columns = [[], [], [], [], [], [], [], [], []];
    
    grid.forEach((row) => {
      row.forEach((el, i) => {
        columns[i] = [...columns[i], el];
      });
    });
    
    // shuffle again:
    grid = [
      ...this.shuffle(columns.slice(0, 3), 3),
      ...this.shuffle(columns.slice(3, 6), 3),
      ...this.shuffle(columns.slice(6), 3),
    ];
    
    this.solution = grid;
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

  renderSolution = () => this.solution;

  generatePartial = difficulty => {
    let numberOfClues;
    switch (difficulty) {
      case 'Easy': numberOfClues = 36; break;
      case 'Medium': numberOfClues = 27; break;
      case 'Hard': numberOfClues = 21; break;
      case 'Expert': numberOfClues = 17; break;
      default: throw new Error();
    }
    // generating random coordinates, used to place clues:
    let clueCoordinates = [];
    while (clueCoordinates.length < numberOfClues) {
      const newCoord = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]
      if (!JSON.stringify(clueCoordinates).includes(JSON.stringify(newCoord))) {
        clueCoordinates = [...clueCoordinates, newCoord];
      }
    }
    
    // zero-padded 9 x 9 grid:
    let partialGrid = [];
    for (let y = 0; y < 9; y++) {
      let newRow = [];
      for (let x = 0; x < 9; x++) newRow = [...newRow, 0];
      partialGrid = [...partialGrid, newRow];
    }

    // replacing values in the partialGrid with the solution values at the selected clueCoordinates:
    clueCoordinates.forEach(clue => partialGrid[clue[1]][clue[0]] = this.solution[clue[1]][clue[0]]);
    this.partial = partialGrid;
  }

  renderPartial = () => this.partial;

  fillPartial = () => {
    this.partial = [...this.solution];
  }

  fillCell = (coord, number) => {
    const validNumbers = [...Array(9).keys()].map(el => el + 1);
    if (this.partial[coord[1]][coord[0]] === number) { 
      this.clearCell(coord);
    } else if (validNumbers.includes(number)) { 
      this.partial[coord[1]][coord[0]] = number;
    }
  }

  clearCell = coord => this.partial[coord[1]][coord[0]] = 0;

  cellsLeft = () => {
    const allValues = this.partial.reduce((acc, val) => acc.concat(val), [])
    return allValues.filter(value => value === 0).length;
  }

  getIncorrectCoordinates = () => {
    let incorrectCoordinates = [];
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (this.solution[y][x] !== this.partial[y][x]) {
          incorrectCoordinates = [...incorrectCoordinates, [x, y]];
        }
      }
    }
    return incorrectCoordinates;
  }
};
