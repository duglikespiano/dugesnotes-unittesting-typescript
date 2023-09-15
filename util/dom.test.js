import fs from 'fs';
import path from 'path';
import { beforeEach, expect, it, vi } from 'vitest';
import { showError } from './dom';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
	document.body.innerHTML = '';
	document.write(htmlDocumentContent);
});

it('should add an error paragraph to the id="errors" element', () => {
	showError('test');
	const errorElement = document.getElementById('errors');
	const errorParagraph = errorElement.firstElementChild;
	expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
	const errorElement = document.getElementById('errors');
	const errorParagraph = errorElement.firstElementChild;
	expect(errorParagraph).toBeNull();
});

it('should output the provided in the error paragraph', () => {
	const testErrorMessage = 'test';
	showError(testErrorMessage);
	const errorElement = document.getElementById('errors');
	const errorParagraph = errorElement.firstElementChild;
	expect(errorParagraph.textContent).toBe(testErrorMessage);
});
