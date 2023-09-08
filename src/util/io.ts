import path from 'path';
import { promises as fs } from 'fs';

export default function writeData(data: any, filename: any) {
	const storagePath = path.join(process.cwd(), 'data', filename);
	return fs.writeFile(storagePath, data);
}
