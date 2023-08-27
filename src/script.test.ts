import { it, expect } from 'vitest';
import { addNumbers } from './script';

it('should summarize all number values in an array', () => {
	// Arrange
	const numbers = [1, 2, 3];
	const expectedResult = numbers.reduce(
		(prevValue: number, curValue: number) => prevValue + curValue,
		0
	);

	// Act
	const result = addNumbers(numbers);

	// Assert
	expect(result).toBe(expectedResult);
});

it('should yield NaN if a least one invalid number is provided', () => {
	// Arrange
	const input: any[] = ['invalid', 1];

	// Act
	const result = addNumbers(input);

	// Assert
	expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
	// Arrange
	const numbers: any[] = ['1', '2'];
	const expectedResult = numbers.reduce(
		(prevValue: number, curValue: number) => +prevValue + +curValue,
		0
	);

	// Act
	const result = addNumbers(numbers);

	// Assert
	expect(result).toBe(expectedResult);
});
