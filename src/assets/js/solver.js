const LocationPossibilities = require('./utils/LocationPossibilities');
const PuzzleState = require('./utils/PuzzleState');
const { getSquareBoundsOfLocation, isComplete, copyMatrix } = require('./utils/utils');

const findPossibleValuesOfLocation = (sudokuPuzzle, rowIndex, columnIndex) => {
	let possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	sudokuPuzzle[rowIndex].forEach((rowElement) => {
		possibleValues = possibleValues.filter((value) => value !== rowElement);
	});

	sudokuPuzzle.forEach((row) => {
		possibleValues = possibleValues.filter((value) => value !== row[columnIndex]);
	});

	const squareBounds = getSquareBoundsOfLocation(rowIndex, columnIndex);

	for (let i = squareBounds.rowStart; i < squareBounds.rowStart + 3; i ++) {
		for (let j = squareBounds.columnStart; j < squareBounds.columnStart + 3; j ++) {
			possibleValues = possibleValues.filter((value) => value !== sudokuPuzzle[i][j]);
		}
	}

	return new LocationPossibilities(rowIndex, columnIndex, possibleValues);
};

const getLocationWithLeastPossibilities = (sudokuPuzzle) => {
	const possibilities = [];
	sudokuPuzzle.forEach((row, rowIndex) => {
		row.forEach((rowValue, columnIndex) => {
			if (rowValue === 0) {
				possibilities.push(findPossibleValuesOfLocation(sudokuPuzzle, rowIndex, columnIndex));
			}
		});
	});

	possibilities.sort((a, b) => a.possibleValues.length - b.possibleValues.length);

	return possibilities[0];
}

export const solveSudokuPuzzle = (sudokuPuzzle) => {
	const sudokuPuzzleCopy = copyMatrix(sudokuPuzzle);

	const initialTargetLocation = getLocationWithLeastPossibilities(sudokuPuzzleCopy);
	const initialState = new PuzzleState(sudokuPuzzleCopy, initialTargetLocation);

	const queue = [initialState];

	while (queue.length > 0) {
		const currentPuzzleState = queue.pop();

		if (isComplete(currentPuzzleState.sudokuPuzzle)) {
			return currentPuzzleState.sudokuPuzzle;
		}

		const targetLocation = currentPuzzleState.locationWithLeastPossibilities;
		targetLocation?.possibleValues.forEach((possibleValue) => {
			const currentStateMatrixCopy = copyMatrix(currentPuzzleState.sudokuPuzzle);
			currentStateMatrixCopy[targetLocation.rowIndex][targetLocation.columnIndex] = possibleValue;

			queue.push(new PuzzleState(currentStateMatrixCopy, getLocationWithLeastPossibilities(currentStateMatrixCopy)));
		});
	}

	return [];
};
