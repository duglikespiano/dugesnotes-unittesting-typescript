import writeData from './util/io.js';

export function generateReportData(logFn: any) {
	const data = 'Some dummy data for this demo app';
	if (logFn) {
		logFn(data);
	}

	return data;
}

export async function storeData(data: any) {
	if (!data) {
		throw new Error('No data received!');
	}
	await writeData(data, 'data.txt');
}
