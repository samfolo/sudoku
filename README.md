# Sudoku
[![Build Status](https://travis-ci.com/samfolo/sudoku.svg?branch=master)](https://travis-ci.com/samfolo/sudoku) [![Maintainability](https://api.codeclimate.com/v1/badges/22821d713c1085d97684/maintainability)](https://codeclimate.com/github/samfolo/sudoku/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/22821d713c1085d97684/test_coverage)](https://codeclimate.com/github/samfolo/sudoku/test_coverage)

[Setup](#setup) | [Features](#features)

A personal project, the goal was to create a front-end application which allows users to play a randomly generated game of Sudoku at any of four levels of difficulty.<br /><br />The task included writing an algorithm to generate new puzzles, as well as the tools a sudoku player would need for strategy (such as temporarily placements).  The end product is a minimal widget with a vibrant contrasting design and a smooth user experience.

# Setup

Firstly, ensure you have <a href="https://nodejs.org">Node.js</a> installed.

Clone into this repository, cd into the directory, then run:
```
$ npm install
```

To run tests, run:
```
$ npm test
```

If you'd also like to see the coverage report, you can instead run:
```
$ npm test -- --coverage a
```

To run the application locally, run:
```
$ npm start
```

the application will be live on `https://localhost:3000` by default.

# Features

## Settings
```
As a user
So that I can relax on the train ride home
I would like to be able to play a game of Sudoku

As a user
So that I can slowly improve my skills
I would like to choose between four levels of difficulty
```

> Users are first taken to a settings screen.  Here they can choose between:<br />
  Easy     – 36 clues<br />
  Medium   – 27 clues<br />
  Hard     – 20 clues<br />
  Expert   – 17 clues<br />

<img src="images/Sudoku Settings Page.png" />

## In-Game
```
As a user
So that I can keep track of possible placements
I would like to be able to pencil in temporary solutions

As a user
So that I can correct my mistakes as and when they happen
I would like to be able to remove a placement

As a user
So I actually have a chance of solving a puzzle
I would like all puzzles to be valid

As a user
So I can keep track of my solution
I would like my placements to be easily visible against the grid
```

> Users can assign, remove and reassign the value of any editable cell<br />
  To aid users in narrowing down the correct placements, users are able to place temporary guesses in empty cells<br />
  The designs ensure users are easily able to keep track of self-assigned values.

<img src="images/Sudoku Mid-Game.png" />

## On Success
```
As a user
So that I know when I've successfully completed a puzzle
I would like to know when my submission is correct

As a user
So I can play again
I want to be able to start again after finishing a puzzle
```

> Upon successful completion, all cells will light up green
  Users cannot edit their solution, but are free to begin another puzzle.

<img src="images/Sudoku Success.png" />

## On Failure
```
As a user
So that I'm aware of where I went wrong
I would like to see my errors at the end of the game

As a user
So I'm not obliged to continue a puzzle I'm stuck on
I want to be able to start again
```

> If a user fails to solve a puzzle, they are free to start again with a different one
  They can also click the `Solution` button to see the correct solution.
  
<img src="images/Sudoku Failure.png" />

-------------

## To do:
  ```
    – Show solution => 'are you sure?' modal
    – Helpful hints
    – Complex Animation/Styling
    – Monitor game duration
  ```
