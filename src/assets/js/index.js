import { generatePuzzle, solve } from './utils/utils';

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('keyup', (event) => {
		if (!document.activeElement || !document.activeElement.classList.contains('location')) {
			return;
		}

		const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
		if (numbers.includes(event.key)) {
			document.activeElement.textContent = event.key;
		} else if (['Delete', 'Backspace'].includes(event.key)) {
			document.activeElement.textContent = '';
		}

	});
});
