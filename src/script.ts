import { Request } from 'express';

export const extractResultQueryParam = (req: Request) => {
	let result = req.query.result;

	if (!result) {
		result = '0';
	}

	return result;
};

export const extractNumbers = (req: Request) => {
	const num1Input = req.body.num1;
	const num2Input = req.body.num2;

	return [num1Input, num2Input];
};

export const addNumbers = (numbers: number[]) => {
	let sum = 0;

	for (const number of numbers) {
		sum += number;
		// sum += +number;
	}
	return sum;
};

export const mainpage = (resultText: string) => {
	return `
	<html>
      <head>
        <title>Testing Basics</title>
        <style>
          html {
            font-family: sans-serif;
          }
          
          body {
            margin: 2rem;
          }

          div, label {
            display: block;
            margin-bottom: 0.5rem;
          }
        </style>
      </head>
      <body>
        <form action="/calculate" method="POST">
          <div>
            <label for="num1">First Number</label>
            <input id="num1" name="num1" type="numeric">
          </div>
          <div>
            <label for="num2">Second Number</label>
            <input id="num2" name="num2" type="numeric">
          </div>
          <button>Calculate</button>
        </form>
        <div>
          ${resultText}
        </div>
      </body>
    </html>
	`;
};

export function transformToNumber(value: string) {
	return +value;
}

export function validateStringNotEmpty(value: string) {
	if (value.trim().length === 0) {
		throw new Error('Invalid input - must not be empty.');
	}
}

export function validateNumber(number: number) {
	if (isNaN(number)) {
		throw new Error('Invalid number input.');
	}
}
