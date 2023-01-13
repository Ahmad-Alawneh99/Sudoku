module.exports = class PuzzleState {
    constructor(sudokuPuzzle, locationWithLeastPossibilities) {
        this.sudokuPuzzle = sudokuPuzzle;
        this.locationWithLeastPossibilities = locationWithLeastPossibilities;
    }
}