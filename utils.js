const printPuzzle = (sudokuPuzzle) => {
	sudokuPuzzle.forEach((row, index) => {
		if ([3, 6].includes(index)) {
			console.log('---------------------------');
		}
		console.log(`${row.slice(0, 3).join('  ')} | ${row.slice(3, 6).join('  ')} | ${row.slice(6, 9).join('  ')}`);
	});
};

const getAxisStart = (currentIndex) => {
	let axisStart = 0;
	if (currentIndex >= 3 && currentIndex <= 5) {
		axisStart = 3;
	} else if (currentIndex >= 6) {
		axisStart = 6;
	}

	return axisStart;
};

const getSquareBoundsOfLocation = (rowIndex, columnIndex) => ({
	rowStart: getAxisStart(rowIndex),
	columnStart: getAxisStart(columnIndex)
});

const isComplete = (sudokuPuzzle) => {
	let hasEmptyLocations = false;
	sudokuPuzzle.forEach((row) => {
		if (hasEmptyLocations) {
			return hasEmptyLocations;
		}

		hasEmptyLocations = !!row.filter((rowElement) => rowElement === 0).length;
	});

	return !hasEmptyLocations;
};

const copyMatrix = (matrix) => {
	let newMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		newMatrix[i] = matrix[i].slice();
	}

	return newMatrix;
};

module.exports = {
    printPuzzle,
    getAxisStart,
    getSquareBoundsOfLocation,
    isComplete,
    copyMatrix,
};
