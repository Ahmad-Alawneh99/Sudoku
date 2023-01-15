export const printPuzzle = (sudokuPuzzle) => {
	sudokuPuzzle.forEach((row, index) => {
		if ([3, 6].includes(index)) {
			console.log('---------------------------');
		}
		console.log(`${row.slice(0, 3).join('  ')} | ${row.slice(3, 6).join('  ')} | ${row.slice(6, 9).join('  ')}`);
	});
};

export const getAxisStart = (currentIndex) => {
	let axisStart = 0;
	if (currentIndex >= 3 && currentIndex <= 5) {
		axisStart = 3;
	} else if (currentIndex >= 6) {
		axisStart = 6;
	}

	return axisStart;
};

export const isComplete = (sudokuPuzzle) => {
	let hasEmptyLocations = false;
	sudokuPuzzle.forEach((row) => {
		if (hasEmptyLocations) {
			return hasEmptyLocations;
		}

		hasEmptyLocations = !!row.filter((rowElement) => rowElement === 0).length;
	});

	return !hasEmptyLocations;
};

export const copyMatrix = (matrix) => {
	let newMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		newMatrix[i] = matrix[i].slice();
	}

	return newMatrix;
};

export const generatePuzzle = () => {
	return [
		3, 8, 5, 0, 0, 0, 0, 0, 0,
		9, 2, 1, 0, 0, 0, 0, 0, 0,
		6, 4, 7, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 1, 2, 3, 0, 0, 0,
		0, 0, 0, 7, 8, 4, 0, 0, 0,
		0, 0, 0, 6, 9, 5, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 8, 7, 3,
		0, 0, 0, 0, 0, 0, 9, 6, 2,
		0, 0, 0, 0, 0, 0, 1, 4, 5,
	];
}