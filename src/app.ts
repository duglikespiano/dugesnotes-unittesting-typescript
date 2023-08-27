// TODO app.post calculate 하는 것 부터 하기

import express, { Express, Request, Response } from 'express';
import http from 'http';
import {
	extractNumbers,
	extractResultQueryParam,
	validateStringNotEmpty,
	validateNumber,
	transformToNumber,
	addNumbers,
	mainpage,
} from './script';

const port = 8000;
const app: Express = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));

server.listen(port, () => {
	console.log(`server is listening on port ${port}!`);
});

app.get('/', (req: Request, res: Response) => {
	const result = extractResultQueryParam(req);
	let resultText = '';

	if (result === 'invalid') {
		resultText = 'Please enter valid numbers';
	} else if (result !== 'no-calc') {
		resultText = 'Result: ' + result;
	}

	res.send(mainpage(resultText));
});

app.post('/calculate', (req: Request, res: Response) => {
	let result = '';

	const numberInputs = extractNumbers(req);
	const numbers = [];

	try {
		for (const numberInput of numberInputs) {
			validateStringNotEmpty(numberInput);
			const number = transformToNumber(numberInput);
			validateNumber(number);
			numbers.push(number);
		}
		result = addNumbers(numbers).toString();
	} catch (error: any) {
		result = error.message;
	}
	res.redirect('/?result=' + result);
});
