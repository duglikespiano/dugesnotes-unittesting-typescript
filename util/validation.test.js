import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
	const testInput = '';
	const validationFunction = () => validateNotEmpty(testInput);
	expect(validationFunction).toThrow();
});

it('should throw and error with the provided error message', () => {
	const testInput = '';
	const testErrorMessage = 'Test';
	const validationFunction = () => validateNotEmpty(testInput, testErrorMessage);
	expect(validationFunction).toThrow(testErrorMessage);
});
