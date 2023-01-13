// @TODO: temp file
const { generate } = require('@mjrdd/sudoku');
const { solveSudokuPuzzle } = require('./solver');
const { printPuzzle } = require('./utils');

const getRandomInt = (start, end) => (Math.floor(Math.random() * (end - start) + start));

const removeHintsFromPuzzle = (sudokuPuzzle, hintsToRemove) => {
	if (hintsToRemove > 81) {
		hintsToRemove = 81;
	}

	if (hintsToRemove < 0) {
		hintsToRemove = 0;
	}

	let removedCount = 0;

	while (removedCount < hintsToRemove) {
		const row = getRandomInt(0, 9);
		const column = getRandomInt(0, 9);

		if (sudokuPuzzle[row][column] !== 0) {
			sudokuPuzzle[row][column] = 0;
			removedCount++;
		}
	}
};

const puzzle = generate();
removeHintsFromPuzzle(puzzle, 80);

printPuzzle(puzzle);
console.log('\nSolution:\n');
printPuzzle(solveSudokuPuzzle(puzzle));
