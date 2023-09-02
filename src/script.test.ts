import { it, expect, describe } from 'vitest';
import {
	addNumbers,
	transformToNumber,
	validateNumber,
	validateStringNotEmpty,
} from './script';

describe('addNumbers()', () => {
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

	it('should yelid 0 if an empty array is provided', () => {
		// Arrange
		const numbers: any = [];

		// Act
		const result = addNumbers(numbers);

		// Assert
		expect(result).toBe(0);
	});

	it('should throw an error if no value is passed into the function', () => {
		const resultFunction = () => {
			addNumbers();
		};
		expect(resultFunction).toThrow();
		// expect(resultFunction).not.toThrow();
	});

	it('should throw an error if provided with multiple arguments instead of an array', () => {
		// Arrange
		const number1 = 1;
		const number2 = 2;

		// Act
		const resultFunction = () => {
			addNumbers(number1, number2);
		};

		// Assert
		expect(resultFunction).toThrow(/is not iterable/);
		// expect(resultFunction).toThrow(/something went wrong/);
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
});

describe('transformToNumber()', () => {
	it('should transform a string number to a number of type number', () => {
		// Arrange
		const input = '1';

		// Act
		const result = transformToNumber(input);

		// Assert
		expect(result).toBeTypeOf('number');
	});

	it('should yield NaN for non-transformable values', () => {
		// Arrange
		const input1 = 'invalid';
		const input2 = {};

		// Act
		const result1 = transformToNumber(input1);
		const result2 = transformToNumber(input2);

		// Assert
		expect(result1).toBeNaN();
		expect(result2).toBeNaN();
	});
});

function generateResultText(val: any): any {
	return val.toString();
}

describe('generateResultText()', () => {
	it('should return a string, no matter which value is passed in', () => {
		const val1 = 1;
		const val2 = 'invalid';
		const val3 = true;

		const result1 = generateResultText(val1);
		const result2 = generateResultText(val2);
		const result3 = generateResultText(val3);

		expect(result1).toBeTypeOf('string');
		expect(result2).toBeTypeOf('string');
		expect(result3).toBeTypeOf('string');
	});
});

function cleanNumbers(numberValues: any): any[] {
	const numbers: any[] = [];
	for (const numberInput of numberValues) {
		validateStringNotEmpty(numberInput);
		const number = transformToNumber(numberInput);
		validateNumber(number);
		numbers.push(number);
	}
	return numbers;
}

describe('cleanNumbers()', () => {
	it('should return an array of values if an array of string number values is provided', () => {
		const numberValues = ['1', '2'];
		const cleanedNumbers = cleanNumbers(numberValues);
		expect(cleanedNumbers[0]).toBeTypeOf('number');
	});

	it('should throw an error if an array with at least one empty string is provided', () => {
		const numberValues = ['', 1];
		const cleanFunction = () => cleanNumbers(numberValues);
		expect(cleanFunction).toThrow();
	});
});
