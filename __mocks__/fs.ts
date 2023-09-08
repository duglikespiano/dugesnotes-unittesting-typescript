import { vi } from 'vitest';

export const promises = {
	wrtieFile: vi.fn((path, data) => {
		return new Promise((resolve, reject) => {
			resolve(null);
		});
	}),
};
