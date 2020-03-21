// a backtracking algorithm to generate true sudoku grid from a single line of random numbers

// steps:

// generate grid
// generate first row of random numbers
// find a way to validate every row, column and subgrid

// iterate over the grid
// miss out filled squares
// recursive backtracking when placement is invalid

// if the end is reached, return the grid
// else return false

let grid = [
  [9, 2, 8, 1, 3, 6, 4, 7, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const solve = (grid, col = 0, row = 0) => {
  let x = col;
  let y = row;

  while (grid[y][x] !== 0) {
    x++;
    if (x >= grid.length) {
      x = 0;
      y++;
    };
    if (y === grid.length) {
      return true;
    }
  }

  for (let i = 1; i < 10; i++) {
    if (validPlacement(grid, i, x, y)) {
      grid[y][x] = i;
      if (solve(grid, x + 1, y)) {
        return grid;
      } else {
        grid[y][x] = 0;
      }
    }
  }

  return false;
}

const validRow = (row, placement) => {
  return !row.includes(placement);
}

const validColumn = (grid, placement, xIndex) => {
  const columnAsRow = grid.map(row => row[xIndex]);
  return validRow(columnAsRow, placement);
}

const validSubGrid = (grid, placement, xIndex, yIndex) => {
  let yStart = 0; let yEnd = 0;
  let xStart = 0; let xEnd = 0;

  switch (true) {
    case (yIndex < 3) : yStart = 0; yEnd = 3; break;
    case (yIndex < 6) : yStart = 3; yEnd = 6; break;
    default : yStart = 6; yEnd = 9;
  }

  switch (true) {
    case (xIndex < 3) : xStart = 0; xEnd = 3; break;
    case (xIndex < 6) : xStart = 3; xEnd = 6; break;
    default : xStart = 6; xEnd = 9;
  }

  const subGridAsRow = [];
  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      subGridAsRow.push(grid[y][x]);
    }
  }

  return validRow(subGridAsRow, placement);
}

const validPlacement = (grid, placement, xIndex, yIndex) => {
  return validRow(grid[yIndex], placement) &&
    validColumn(grid, placement, xIndex) &&
    validSubGrid(grid, placement, xIndex, yIndex);
}

export default solve;
